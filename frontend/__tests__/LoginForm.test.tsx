import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from '@/app/(auth)/login/page';

// Mock the useRouter and useAuth hooks
jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: jest.fn() })
}));

jest.mock('@/hooks/useAuth', () => ({
  useAuth: () => ({ login: jest.fn() })
}));

describe('LoginForm', () => {
  it('renders email and password inputs', () => {
    render(<LoginPage />);
    expect(screen.getByPlaceholderText('E-poçt ünvanınız')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Şifrəniz')).toBeInTheDocument();
  });

  it('shows validation error when submitting empty form', () => {
    render(<LoginPage />);
    fireEvent.click(screen.getByRole('button', { name: /daxil ol/i }));
    expect(screen.getByText('Bütün xanaları doldurun')).toBeInTheDocument();
  });
});
