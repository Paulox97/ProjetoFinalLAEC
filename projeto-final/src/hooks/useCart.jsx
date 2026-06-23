import { useState, useEffect, createContext, useContext } from "react";
//Criar o contexto do carrinho, enviando informações
const CartContext = createContext();

export function CartProvider({ children }) {
    //Procura se existem item no Local Storage, se não, inicia o carrinho com uma lista vazia
    const [cart, setCart] = useState(() => {
        return JSON.parse(localStorage.getItem("carrinho")) || [];
    });
    //Sempre que existir uma alteração no carrinho, o useEffect roda e salva a versão atualizada com inserção ou remoção.
    useEffect(() => {
        if (cart) {
            localStorage.setItem("carrinho", JSON.stringify(cart));
        }
    }, [cart]);
    //Função para adicionar produto no carrinho
    const addProductCart = (product, quantityToAdd = 1) => {
        setCart((prevCart) => {
            //Verifica se o produto já existe
            const exists = prevCart.find((p) => Number(p.id) === Number(product.id));
            //Se existir, ele percorre a lista e altera a quantidade daquele produto específico
            if (exists) {
                return prevCart.map((p) => 
                    Number(p.id) === Number(product.id)
                        ? { ...p, quantidade: p.quantidade + Number(quantityToAdd) }
                        : p
                    );
            }
            //Se o produto for novo, cria uma nova lista, copaindo os produtos antigos com o spread
            return [...prevCart, { ...product, quantidade: Number(quantityToAdd) }];
            
        });
    };
    //Função de remoção
    const removeProductCart = (productId) => {
        //Faz um filtro para manter apenas os produtos que têm o ID diferente do que vamos deletar
        setCart(cart.filter((p) => p.id !== productId));
    };

    //Função Atualizar a quantidade
    const updateQuantity = (productId, action) => {
        setCart(cart.map((p) => {
            if (p.id === productId) {
                //Se a ação for for de adicionar, aumenta 1, se não, diminui 1
                const novaQtd = action === "incrementar" ? p.quantidade + 1 : p.quantidade - 1;
                //Trava para não ficar com a quantidade zero, se for o caso, excluir
                return { ...p, quantidade: novaQtd < 1 ? 1 : novaQtd };
            }
            return p; //Retorna produtos sem alteração
        }));
};

    return (
        //Distribui o estado atual do carrinho e as 03 funções de controle para toda a aplicação
        <CartContext.Provider value={{ cart, addProductCart, removeProductCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
}

//Aqui seria um "atalho" para não precisar importar o contexto e o useContext toda hora, apenas cahmar o useCart()
export function useCart(){
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart deve ser usado dentro de um CartProvider");
    }
    return context;
}

