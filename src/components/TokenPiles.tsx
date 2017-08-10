import * as React from 'react';
import './TokenPiles.css';
import Token from './Token';

export interface TokenPilesProps {
    numberOfAPile: number;
}

function forCount(count: number): number[] {
    var numbers = [];
    for (var i = 0; i < count; i++) {
        numbers[i] = i;
    }
    return numbers;
}

export default class TokenPiles extends React.Component<TokenPilesProps, {}> {
    constructor(props: TokenPilesProps) {
        super(props);
    }

    render() {
        return (
            <div className="TokenPiles">
                <div className="APileOfToken">
                    {
                        forCount(5).map(i => (
                            <div className="TokenInPile">
                                <Token token="y" />
                            </div>
                        ))
                    }
                </div>
                <div className="APileOfToken">
                    {
                        forCount(this.props.numberOfAPile).map(i => (
                            <div className="TokenInPile">
                                <Token token="k" />
                            </div>
                        ))
                    }
                </div>
                <div className="APileOfToken">
                    {
                        forCount(this.props.numberOfAPile).map(i => (
                            <div className="TokenInPile">
                                <Token token="r" />
                            </div>
                        ))
                    }
                </div>
                <div className="APileOfToken">
                    {
                        forCount(this.props.numberOfAPile).map(i => (
                            <div className="TokenInPile">
                                <Token token="g" />
                            </div>
                        ))
                    }
                </div>
                <div className="APileOfToken">
                    {
                        forCount(this.props.numberOfAPile).map(i => (
                            <div className="TokenInPile">
                                <Token token="b" />
                            </div>
                        ))
                    }
                </div>
                <div className="APileOfToken">
                    {
                        forCount(this.props.numberOfAPile).map(i => (
                            <div className="TokenInPile">
                                <Token token="w" />
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}
