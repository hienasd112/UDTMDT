import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

// 'export' là từ khóa bị thiếu
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart phải được dùng bên trong CartProvider');
  }
  return context;
};