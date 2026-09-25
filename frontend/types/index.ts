export interface User {
  id: string;
  email: string;
  roles: string[];
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  price: number;
  description?: string;
  city: string;
  condition: string;
  imageUrl?: string;
  storeName?: string;
  storeSlug?: string;
  storeId?: string;
  categoryId?: string;
  promotionType?: string;
  createdAt?: string;
}

export interface ProductRequest {
  title: string;
  description: string;
  price: number;
  city: string;
  condition: string;
  categoryId: string;
}

export interface ProductResponse {
  product: Product;
}

export interface Store {
  id: string;
  name: string;
  slug: string;
  description?: string;
  city: string;
  logoUrl?: string;
  verified?: boolean;
}

export interface StoreRequest {
  name: string;
  description: string;
  city: string;
}

export interface StoreResponse {
  store: Store;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  parentId?: string;
}

export interface Promotion {
  id: string;
  type: string;
  expiresAt: string;
}

export interface PromotionPackage {
  id: string;
  name: string;
  type: string;
  durationDays: number;
  price: number;
}

export interface Conversation {
  id: string;
  productId: string;
  productTitle: string;
  otherUserId: string;
  otherUserName: string;
  lastMessage?: string;
  updatedAt: string;
}

export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  content: string;
  createdAt: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  content: string;
  type: string;
  read: boolean;
  createdAt: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
}

export interface PaginatedResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}
