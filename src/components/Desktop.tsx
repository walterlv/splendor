import * as React from 'react';
import './Desktop.css';
import * as Model from '../data/model';
import SplendorGame from '../game/SplendorGame';
import CardDecks from './CardDecks';
import TokenPiles from './TokenPiles';
import NobleTiles from './NobleTiles';

export interface DesktopState {
    cards: {
        opened1: Model.Card[];
        opened2: Model.Card[];
        opened3: Model.Card[];
    };
    nobles: {
        opened: Model.Noble[];
    };
}

export default class Desktop extends React.Component<{}, DesktopState> {
    game: SplendorGame;

    constructor() {
        super();
        this.game = new SplendorGame();
        this.state = {
            cards: {
                opened1: this.game.flopCards(0, 4),
                opened2: this.game.flopCards(1, 4),
                opened3: this.game.flopCards(2, 4),
            },
            nobles: {
                opened: this.game.flopNobles(5),
            },
        };
    }

    render() {
        return (
            <div className="Desktop">
                <div className="OpeningCards">
                    <CardDecks
                        opened1={this.state.cards.opened1}
                        opened2={this.state.cards.opened2}
                        opened3={this.state.cards.opened3}
                    />
                </div>
                <div className="TokenPiles">
                    <TokenPiles numberOfAPile={7} />
                </div>
                <div className="NobleTiles">
                    <NobleTiles opened={this.state.nobles.opened} />
                </div>
            </div>
        );
    }
}
