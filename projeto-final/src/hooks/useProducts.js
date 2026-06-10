import { useState, useEffect } from "react";
import { ProductService } from '../services/ProductService';

export function useProducts() {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        async function loadProducts(){
            try{
            const data = await ProductService(); //await é como se fosse um freio para que seja finalizado para depois continuar
            setProducts(data);
            }catch(error){
                console.error("Erro ao carregar produtos ", error);
            }
        }
        loadProducts();
    },[])

    return products
}