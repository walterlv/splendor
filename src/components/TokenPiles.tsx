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
                                <Token token="y" key={`y,${i.toString()}`} />
                            </div>
                        ))
                    }
                </div>
                <div className="APileOfToken">
                    {
                        forCount(this.props.numberOfAPile).map(i => (
                            <div className="TokenInPile">
                                <Token token="k" key={`k,${i.toString()}`} />
                            </div>
                        ))
                    }
                </div>
                <div className="APileOfToken">
                    {
                        forCount(this.props.numberOfAPile).map(i => (
                            <div className="TokenInPile">
                                <Token token="r" key={`r,${i.toString()}`} />
                            </div>
                        ))
                    }
                </div>
                <div className="APileOfToken">
                    {
                        forCount(this.props.numberOfAPile).map(i => (
                            <div className="TokenInPile">
                                <Token token="g" key={`g,${i.toString()}`} />
                            </div>
                        ))
                    }
                </div>
                <div className="APileOfToken">
                    {
                        forCount(this.props.numberOfAPile).map(i => (
                            <div className="TokenInPile">
                                <Token token="b" key={`b,${i.toString()}`} />
                            </div>
                        ))
                    }
                </div>
                <div className="APileOfToken">
                    {
                        forCount(this.props.numberOfAPile).map(i => (
                            <div className="TokenInPile">
                                <Token token="w" key={`w,${i.toString()}`} />
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}
