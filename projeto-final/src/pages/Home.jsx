import { motion } from "framer-motion";
import { useProducts } from "../hooks/useProducts";
import { useCart } from "../hooks/useCart"
import { Link } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { Heading, Box } from "@chakra-ui/react";

import "../styles/Home.css";

export function Home() {
    const products = useProducts();
    const { addProductCart } = useCart();

    const handleAdd = (product) => {
        addProductCart(product);
        console.log("Produto adicionado:", product);
    }

    return (
        <Box bg="#D9D9D9" maxW="100vw" minH="100vh" m="0" pt="130px" px="6" pb="6">
            <div className="container">
                <Heading as="h2" size="xl" mb="4" color="#236D83">Promoções</Heading>
                <div className="row">
                {products.map(p=>(
                    <div key={p.id} className="CardsProdutos">                
                            <ProductCard produto={p} onAdd={()=> handleAdd(p)}/>
                    </div>
                ))}
                </div>
            </div>
        </Box>
    )
}
