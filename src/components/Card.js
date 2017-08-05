import React, { Component } from 'react';
import './Card.css';
import { cardTagToKey, cardTagToName } from '../data/converter';

export default class Card extends Component {
    constructor(props) {
        super(props);
        if (this.props.data !== undefined) {
            this.state = {
                points: this.props.data.points,
                token: this.props.data.token,
                price: this.props.data.price,
            };
        } else {
            this.state = {
                points: 0,
                token: 'w',
                price: {
                    w: 0,
                    r: 0,
                    g: 0,
                    b: 0,
                    k: 0,
                },
            };
        }
    }

    render() {
        const points = this.state.points;
        const token = this.state.token;
        const w = this.state.price.w;
        const b = this.state.price.b;
        const g = this.state.price.g;
        const r = this.state.price.r;
        const k = this.state.price.k;
        return (
            <div className="Card">
                <div className="CardTokenContainer">
                    <p className="CardPoints">点数：{points}</p>
                    <p className={`CardToken ${cardTagToKey(token)}`}>
                        {`${cardTagToName(token)}宝石`}
                    </p>
                </div>
                <div className="CardPriceContainer">
                    { w > 0 && <p className="CardPrice White">白宝石：{w}</p> }
                    { b > 0 && <p className="CardPrice Blue">蓝宝石：{b}</p> }
                    { g > 0 && <p className="CardPrice Green">绿宝石：{g}</p> }
                    { r > 0 && <p className="CardPrice Red">红宝石：{r}</p> }
                    { k > 0 && <p className="CardPrice Black">黑宝石：{k}</p> }
                </div>
            </div>
        );
    }
}
