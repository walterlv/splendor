import * as React from 'react';
import './Desktop.css';
import { Deck } from '../data/model';
import SplendorGame from '../game/SplendorGame';
import OpeningCards from './OpeningCards';
import TokenPiles from './TokenPiles';

export interface DesktopState {
    opened1: Deck[];
    opened2: Deck[];
    opened3: Deck[];
}

export default class Desktop extends React.Component<{}, DesktopState> {
    game: SplendorGame;

    constructor() {
        super();
        this.game = new SplendorGame();
        this.state = {
            opened1: this.game.flop(0, 4),
            opened2: this.game.flop(1, 4),
            opened3: this.game.flop(2, 4),
        };
    }

    render() {
        return (
            <div className="Desktop">
                <div className="OpeningCards">
                    <OpeningCards
                        opened1={this.state.opened1}
                        opened2={this.state.opened2}
                        opened3={this.state.opened3}
                    />
                </div>
                <div className="TokenPiles">
                    <TokenPiles numberOfAPile={7} />
                </div>
            </div>
        );
    }
}
