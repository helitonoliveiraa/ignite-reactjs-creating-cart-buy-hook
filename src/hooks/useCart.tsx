import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { Product, Stock } from '../types';

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem('@RocketShoes:cart');

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });


  const addProduct = async (productId: number) => {
    try {
      const productExists = cart.find(product => product.id === productId);

      if (!productExists) {
        const product = await api.get(`products/${productId}`);

        const updatedCartProducts = [
          ...cart,
          {
            ...product.data,
            amount: 1,
          },
        ];
  
        setCart(updatedCartProducts);
  
        localStorage.setItem(
          '@RocketShoes:cart', 
          JSON.stringify(updatedCartProducts),
        );

        return;
      }

      const { data } = await api.get(`/stock/${productId}`);

      if (productExists.amount === data.amount) {
        toast.error('Quantidade solicitada fora de estoque');
        return;
      }

      const updatedProducts = cart.map(product => {
        if (product.id === productExists.id) {
          
          if (product.amount < data.amount) {
            return {
              ...product,
              amount: product.amount + 1,
            } 
          } 
        }

        return product;
      });

      setCart(updatedProducts);

      localStorage.setItem(
        '@RocketShoes:cart', 
        JSON.stringify(updatedProducts),
      );
    } catch {
      toast.error('Erro na adição do produto')
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const productExists = cart.find(product => product.id === productId);

      if (!productExists) {
        throw new Error();
      }

      const products = cart.filter(
        productInCart => productInCart.id !== productId
      );

      setCart(products);

      localStorage.setItem('@RocketShoes:cart', JSON.stringify(products));
    } catch {
      toast.error('Erro na remoção do produto');
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      const productExists = cart.find(product => product.id === productId);

      if (!productExists) {
        throw new Error();
      }

      const { data } = await api.get<Stock>(`/stock/${productId}`);

      if (data.amount < amount) {
        toast.error('Quantidade solicitada fora de estoque');
        return;
      }

      if (amount >= 1) {
        const productAmountUpdated = cart.map(product => {
          if (product.id === productExists.id) {
            return {
              ...product,
              amount: amount,
            }
          }
  
          return product;
        });
  
        setCart(productAmountUpdated);
  
        localStorage.setItem('@RocketShoes:cart', JSON.stringify(productAmountUpdated));
      }
    } catch  {
      toast.error('Erro na alteração de quantidade do produto');
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
