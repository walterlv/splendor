import React, { Component } from 'react';
import './Card.css';
import { cardTagToKey, cardTagToName } from '../data/converter';

export default class Card extends Component {
    constructor(props) {
        super(props);
        if (this.props.data !== undefined) {
            this.points = this.props.data.points;
            this.token = this.props.data.token;
            this.w = this.props.data.price.w;
            this.b = this.props.data.price.b;
            this.g = this.props.data.price.g;
            this.r = this.props.data.price.r;
            this.k = this.props.data.price.k;
        } else {
            this.points = 0;
            this.token = 'w';
            this.w = 0;
            this.b = 0;
            this.g = 0;
            this.r = 0;
            this.k = 0;
        }
    }

    render() {
        return (
            <div className="Card">
                <div className="CardTokenContainer">
                    <p className="CardPoints">点数：{this.points}</p>
                    <p className={`CardToken ${cardTagToKey(this.token)}`}>
                        {`${cardTagToName(this.token)}宝石`}
                    </p>
                </div>
                <div className="CardPriceContainer">
                    { this.w > 0 && <p className="CardPrice White">{this.w}</p> }
                    { this.b > 0 && <p className="CardPrice Blue">{this.b}</p> }
                    { this.g > 0 && <p className="CardPrice Green">{this.g}</p> }
                    { this.r > 0 && <p className="CardPrice Red">{this.r}</p> }
                    { this.k > 0 && <p className="CardPrice Black">{this.k}</p> }
                </div>
            </div>
        );
    }
}
