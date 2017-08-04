import React, { Component } from 'react';
import './Card.css'

export default class Card extends Component {
    render() {
        return (
            <div className="Card">
                <div className="CardTagContainer">
                    <p className="CardValue">点数：1</p>
                    <p className="CardTag Green">绿宝石</p>
                </div>
                <div className="CardPriceContainer">
                    <p className="CardPrice White">白宝石：1</p>
                    <p className="CardPrice Red">红宝石：1</p>
                    <p className="CardPrice Green">绿宝石：2</p>
                    <p className="CardPrice Black">黑宝石：1</p>
                </div>
            </div>
        );
    }
}