import { useState, useEffect, createContext, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        return JSON.parse(localStorage.getItem("carrinho")) || [];
    });

    useEffect(() => {
        localStorage.setItem("carrinho", JSON.stringify(cart));
    }, [cart]);

    const addProductCart = (product) => {
        const exists = cart.find((p) => p.id === product.id);
        if (exists) {
            setCart(cart.map((p) => p.id === product.id ? { ...p, quantidade: p.quantidade + 1 } : p));
            return false;
        } else {
            setCart([...cart, { ...product, quantidade: 1 }]);
            return true;
        }
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

