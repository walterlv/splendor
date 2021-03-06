import * as React from 'react';
import './Card.css';
import * as Model from '../data/model';
import { tokenToLocalizedName } from '../data/converter';

export interface CardProps {
    data: Model.Card;
    /**
     * 此卡片的等级。
     */
    level: number;
    /**
     * 此卡片在 level 指定等级下的序号。
     * 0 = 未翻开
     * 1-4 = 已翻开未兑换
     * 11-15 = 在玩家手中未兑换
     * 21-25 = 在玩家手中已兑换
     */
    index: number;
    /**
     * 当选中此卡片的时候发生。
     */
    onSelected?: () => void;
}

function random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default class Card extends React.Component<CardProps, {}> {
    points: number;
    bonus: string;
    w: number;
    b: number;
    g: number;
    r: number;
    k: number;

    constructor(props: CardProps) {
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
        var backgroundImage = {
            backgroundImage : 'url(/resources/deck-2-' + random(0, 7) + '.png)',
        };
        return (
            <div className="Card" style={backgroundImage} onClick={this.props.onSelected}>
                <div className="CardPointsBonusContainer">
                    { this.points > 0 &&
                        <div className="CardPointsContainer">
                            <p className="CardPoints">{this.points}</p>
                        </div>
                    }
                    <div className="CardBonusContainer">
                        <img
                            className="CardBonus"
                            src={`/resources/${this.bonus}.png`}
                            alt={tokenToLocalizedName(this.bonus)}
                        />
                    </div>
                </div>
                <div className="CardPriceContainer">
                    {this.w > 0 && <p className="CardPrice Diamond">{this.w}</p>}
                    {this.b > 0 && <p className="CardPrice Sapphire">{this.b}</p>}
                    {this.g > 0 && <p className="CardPrice Emerald">{this.g}</p>}
                    {this.r > 0 && <p className="CardPrice Ruby">{this.r}</p>}
                    {this.k > 0 && <p className="CardPrice Onyx">{this.k}</p>}
                </div>
            </div>
        );
    }
}
