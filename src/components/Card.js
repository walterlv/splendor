import React, { Component } from 'react';
import './Card.css'
import { cardTagToKey, cardTagToName } from '../data/converter.js';

export default class Card extends Component {
    constructor(props) {
        super(props);
        if (this.props.data != undefined) {
            this.state = {
                points: this.props.data.points,
                token: this.props.data.token,
                price: this.props.data.price
            }
        } else {
            this.state = {
                points: 0,
                token: 'w',
                price: {
                    'w': 0,
                    'r': 0,
                    'g': 0,
                    'b': 0,
                    'k': 0
                }
            }
        }
    }

    render() {
        return (
            <div className="Card">
                <div className="CardTokenContainer">
                    <p className="CardPoints">点数：{ this.state.points }</p>
                    <p className={ "CardToken " + cardTagToKey(this.state.token) }>
                        { cardTagToName(this.state.token) + "宝石" }
                    </p>
                </div>
                <div className="CardPriceContainer">
                    <p className="CardPrice White">白宝石：{ this.state.price.w }</p>
                    <p className="CardPrice Blue">蓝宝石：{ this.state.price.b }</p>
                    <p className="CardPrice Green">绿宝石：{ this.state.price.g }</p>
                    <p className="CardPrice Red">红宝石：{ this.state.price.r }</p>
                    <p className="CardPrice Black">黑宝石：{ this.state.price.k }</p>
                </div>
            </div>
        );
    }
}
