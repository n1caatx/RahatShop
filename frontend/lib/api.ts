import axios from 'axios';
import { 
  AuthResponse, ProductRequest, ProductResponse, 
  StoreRequest, StoreResponse, PaginatedResponse, Category, Product, Store
} from '@/types';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080/api',
});

api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) throw new Error('No refresh token');
        
        const res = await axios.post(`${api.defaults.baseURL}/auth/refresh`, { refreshToken });
        localStorage.setItem('accessToken', res.data.accessToken);
        
        return api(originalRequest);
      } catch (err) {
        if (typeof window !== 'undefined') {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          window.location.href = '/login';
        }
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);

export default {
  auth: {
    login: (email: string, password: string) => api.post<AuthResponse>('/auth/login', { email, password }),
    register: (email: string, password: string, role: string) => api.post<AuthResponse>('/auth/register', { email, password, roles: [role === 'Satıcı' ? 'SELLER' : 'USER'] }),
    refresh: () => api.post('/auth/refresh'),
  },
  products: {
    getProducts: (params?: any) => api.get<PaginatedResponse<Product>>('/products', { params }),
    getProductBySlug: (slug: string) => api.get<Product>(`/products/${slug}`),
    createProduct: (data: ProductRequest) => api.post<Product>('/products', data),
  },
  categories: {
    getCategories: () => api.get<Category[]>('/categories'),
  },
  stores: {
    getStores: (params?: any) => api.get<PaginatedResponse<Store>>('/stores', { params }),
    getStoreBySlug: (slug: string) => api.get<Store>(`/stores/${slug}`),
    createStore: (data: StoreRequest) => api.post<Store>('/stores', data),
  },
  favorites: {
    addFavorite: (productId: string) => api.post(`/favorites/${productId}`),
    removeFavorite: (productId: string) => api.delete(`/favorites/${productId}`),
    getFavorites: () => api.get<Product[]>('/favorites'),
  },
  promotions: {
    getPackages: () => api.get('/promotions/packages'),
    applyPromotion: (productId: string, packageId: string) => api.post('/promotions/apply', { productId, packageId }),
  },
  conversations: {
    getConversations: () => api.get('/conversations'),
    getMessages: (id: string) => api.get(`/conversations/${id}/messages`),
    sendMessage: (id: string, content: string) => api.post(`/conversations/${id}/messages`, { content }),
    startConversation: (productId: string) => api.post('/conversations', { productId }),
  },
  notifications: {
    getNotifications: () => api.get('/notifications'),
    markAsRead: (id: string) => api.patch(`/notifications/${id}/read`),
    getUnreadCount: () => api.get('/notifications/unread-count'),
  },
  admin: {
    getDashboard: () => api.get('/admin/dashboard'),
    getAdminProducts: () => api.get('/admin/products'),
    approveProduct: (id: string) => api.post(`/admin/products/${id}/approve`),
    rejectProduct: (id: string, reason: string) => api.post(`/admin/products/${id}/reject`, { reason }),
  },
};
