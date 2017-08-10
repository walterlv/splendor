import * as React from 'react';
import './Token.css';
import { tokenToLocalizedName, tokenToColor } from '../data/converter';

export interface TokenProps {
    token: string;
}

export default class Token extends React.Component<TokenProps, {}> {
    constructor(props: TokenProps) {
        super(props);
    }

    render() {
        var color = tokenToColor(this.props.token);
        var background = {
            backgroundColor: color,
        };
        return (
            <div className="Token" style={background}>
                <div>
                    <img
                        className="IconInToken"
                        src={`/resources/${this.props.token}.png`}
                        alt={tokenToLocalizedName(this.props.token)}
                    />
                </div>
            </div>
        );
    }
}
