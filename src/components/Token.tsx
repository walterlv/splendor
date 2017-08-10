import * as React from 'react';
import './Token.css';
import { tokenToName, tokenToLocalizedName } from '../data/converter';

export interface TokenProps {
    token: string;
}

export default class Token extends React.Component<TokenProps, {}> {
    constructor(props: TokenProps) {
        super(props);
    }

    render() {
        return (
            <div className={`Token ${tokenToName(this.props.token)}`}>
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
