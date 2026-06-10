/* import React from "react"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faCartShopping, faUser, faBoxOpen, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import "../styles/Home.css" */

import { Link } from 'react-router-dom'

import { MainContent } from "./MainContent";

import "../styles/Home.css"

export function Home() {
    return (
        <div>
            {/* <div className="features-grid">
                {
                    features.map(function (feature, index) { 
                        return (
                            <FeatureCard
                                key={index}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                            />
                        )
                    })
                }
            </div> */}
            <MainContent />
        </div>
    )
}
