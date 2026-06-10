/* import React from "react"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faCartShopping, faUser, faBoxOpen, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import "../styles/Home.css" */
import { Link } from 'react-router-dom'

import "../styles/Home.css"

export function Home() {
    const products = useProducts();


    return (
        <div className="container">
            <div className="row">
            {products.map(p=>(
                <div key={p.id} className="terereu">
                    <ProductCard product={p} onAdd={()=> handleAdd(p)}/>
                </div>

            ))}

            </div>

            
        </div>
    )
}
