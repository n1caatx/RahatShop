import { render, screen } from '@testing-library/react';
import ProductCard from '@/components/product/ProductCard';

describe('ProductCard', () => {
  const mockProduct = {
    id: '1',
    title: 'Test Məhsul',
    slug: 'test-mehsul',
    price: 1500,
    city: 'Bakı',
    condition: 'Yeni',
    storeName: 'Test Mağaza'
  };

  it('renders product information correctly', () => {
    render(<ProductCard {...mockProduct} />);
    
    expect(screen.getByText('Test Məhsul')).toBeInTheDocument();
    expect(screen.getByText(/1.*500.*AZN/)).toBeInTheDocument();
    expect(screen.getByText('Bakı')).toBeInTheDocument();
    expect(screen.getByText('Test Mağaza')).toBeInTheDocument();
  });

  it('renders promotion badge when provided', () => {
    render(<ProductCard {...mockProduct} promotionType="VIP" />);
    expect(screen.getByText('VIP')).toBeInTheDocument();
  });

  it('does not render badge when no promotionType', () => {
    render(<ProductCard {...mockProduct} />);
    expect(screen.queryByText('VIP')).not.toBeInTheDocument();
    expect(screen.queryByText('TOP')).not.toBeInTheDocument();
  });
});
