import * as React from 'react';
import './Noble.css';
import * as Model from '../data/model';

export interface NobleProps {
    data: Model.Noble;
}

export default class Noble extends React.Component<NobleProps, {}> {
    points: number;
    w: number;
    b: number;
    g: number;
    r: number;
    k: number;

    constructor(props: NobleProps) {
        super(props);
        this.points = 3;
        this.w = this.props.data.price.w;
        this.b = this.props.data.price.b;
        this.g = this.props.data.price.g;
        this.r = this.props.data.price.r;
        this.k = this.props.data.price.k;
    }

    render() {
        return (
            <div className="Noble">
                <div className="NoblePointsContainer">
                    <p className="NoblePoints">3</p>
                </div>
                <div className="NoblePriceContainer">
                    {this.w > 0 && <p className="NoblePrice Diamond">{this.w}</p>}
                    {this.b > 0 && <p className="NoblePrice Sapphire">{this.b}</p>}
                    {this.g > 0 && <p className="NoblePrice Emerald">{this.g}</p>}
                    {this.r > 0 && <p className="NoblePrice Ruby">{this.r}</p>}
                    {this.k > 0 && <p className="NoblePrice Onyx">{this.k}</p>}
                </div>
            </div>
        );
    }
}
