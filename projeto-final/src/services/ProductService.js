export async function ProductService() {
    try {
        //Coleta a lista de produtos
        const response = await fetch ('/data/produtos.json');
        //Traduz o json
        const data = await response.json();   
        //Devolve as informações
        return data;
    } catch (error) {
        console.error("Erro ao carregar produtos: ", error);
        
        return [];
    }
}