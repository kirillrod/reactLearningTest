import React, { useState } from "react";
import Data from "../Data"

export default function NewOwners() {

    const cards = Data.map(item => {
        return (
            <Card 
                key={item.id}
                item={item}
            /> 
        )
    })

    return (
        <div className="new-owner-frame">
            <div className="container">
                <div className="new-owner-slider">
                    {cards}
                    <AddCard />
                </div>
            </div>
        </div>
    )
}

function Card(props) {

    let stock_left;
    if (props.item.stock === 0) {
        stock_left = "Sold Out"
    } else if (props.item.stock !== 0) {
        stock_left = `${props.item.stock} Left`
    }

    return (
        <div className="card">
            <h1>{props.item.title}</h1>
            <img src={props.item.image}/>
            <span className="card-stock">{stock_left}</span>
            <h2>{props.item.price} ETH</h2>
        </div>
    )
}

function AddCard() {
    
    function handleClick(){
        return (
            console.log("I've been clicked")
        )
    }

    return (
        <div className="card">
            <form>
                <label>
                    Title
                    <input 
                        type="text"
                        name="title"
                    />
                    Price
                    <input 
                        type="number"
                        name="price"
                    />
                    Stock
                    <input 
                        type="number"
                        name="stock"
                    />
                    <button onClick={handleClick()} />
                </label>
                <input type="" />
            </form>
        </div>
    )
}