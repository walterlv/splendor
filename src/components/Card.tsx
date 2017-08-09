import * as React from 'react';
import './Card.css';
import { tokenToLocalizedName } from '../data/converter';

export default class Card extends React.Component {
    constructor(props) {
        super(props);

        if (this.props.data !== undefined) {
            this.points = this.props.data.points;
            this.bonus = this.props.data.bonus;
            this.w = this.props.data.price.w;
            this.b = this.props.data.price.b;
            this.g = this.props.data.price.g;
            this.r = this.props.data.price.r;
            this.k = this.props.data.price.k;
        } else {
            this.points = 0;
            this.bonus = 'w';
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
                <div className="CardPointsBonusContainer">
                    { this.points > 0 &&
                        <div className="CardPointsContainer">
                            <p className="CardPoints">{this.points}</p>
                        </div>
                    }
                    <div className="CardBonusContainer">
                        <img className="CardBonus" src={`/resources/${this.bonus}.png`} alt={tokenToLocalizedName(this.bonus)} />
                    </div>
                </div>
                <div className="CardPriceContainer">
                    { this.w > 0 && <p className="CardPrice Diamond">{this.w}</p> }
                    { this.b > 0 && <p className="CardPrice Sapphire">{this.b}</p> }
                    { this.g > 0 && <p className="CardPrice Emerald">{this.g}</p> }
                    { this.r > 0 && <p className="CardPrice Ruby">{this.r}</p> }
                    { this.k > 0 && <p className="CardPrice Onyx">{this.k}</p> }
                </div>
            </div>
        );
    }
}
