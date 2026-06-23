import { useState, useEffect } from "react";
import { ProductService } from '../services/ProductService';

export function useProducts() {
    //Estado que irá guardar a lista de produtos
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        //Função para buscar os produtos
        async function loadProducts(){
            try{
            const data = await ProductService(); //await é como se fosse um freio para que seja finalizado para depois continuar
            //Atualiza o estado com os produtos recebidos, apresentando eles na tela
            setProducts(data);
            }catch(error){
                console.error("Erro ao carregar produtos ", error);
            }
        }

        loadProducts();
        //Esse array vazio garante que o gatilho seja disparado somente uma vez por carregamento
    },[])
    //Retorna os produtos após serem coletados
    return products
}