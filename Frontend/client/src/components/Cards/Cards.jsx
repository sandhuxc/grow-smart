import React from "react";
import './Cards.scss'
import Card from "../Card/Card";
const Cards = () => {
    return (
        <div className="Cards">
            <div className="ParentContainer">
                <Card/>
                <Card/>
                <Card/>
            </div>

        </div>
    )
}
export default Cards
