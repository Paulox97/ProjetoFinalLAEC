import { motion } from "framer-motion";
import { useProducts } from "../hooks/useProducts";
import { Link } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { Heading } from "@chakra-ui/react";

import "../styles/Home.css";

export function Home() {
    const products = useProducts();

    <p> Promoções</p>

    const handleAdd = (product) => {
        console.log("Produto adicionado:", product);
    }

    return (
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
    )
}
