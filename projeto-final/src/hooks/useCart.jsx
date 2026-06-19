import { useState, useEffect, createContext, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        return JSON.parse(localStorage.getItem("carrinho")) || [];
    });

    useEffect(() => {
        if (cart) {
            localStorage.setItem("carrinho", JSON.stringify(cart));
        }
    }, [cart]);

    const addProductCart = (product, quantityToAdd = 1) => {
        setCart((prevCart) => {
            const exists = prevCart.find((p) => Number(p.id) === Number(product.id));

            if (exists) {
                return prevCart.map((p) => 
                    Number(p.id) === Number(product.id)
                        ? { ...p, quantidade: p.quantidade + Number(quantityToAdd) }
                        : p
                    );
            }
            
            return [...prevCart, { ...product, quantidade: Number(quantityToAdd) }];
            
        });
    };

    const removeProductCart = (productId) => {
        setCart(cart.filter((p) => p.id !== productId));
    };


    const updateQuantity = (productId, action) => {
        setCart(cart.map((p) => {
            if (p.id === productId) {
                const novaQtd = action === "incrementar" ? p.quantidade + 1 : p.quantidade - 1;
                return { ...p, quantidade: novaQtd < 1 ? 1 : novaQtd };
            }
            return p;
        }));
};

    return (
        <CartContext.Provider value={{ cart, addProductCart, removeProductCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart(){
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart deve ser usado dentro de um CartProvider");
    }
    return context;
}

