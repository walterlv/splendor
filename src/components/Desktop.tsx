import * as React from 'react';
import './Desktop.css';
import Card from './Card';
import SplendorGame from '../game/SplendorGame';
import { Deck } from '../data/model';

export interface PlaygroundState {
    opened1: Deck[];
    opened2: Deck[];
    opened3: Deck[];
}

export default class Playground extends React.Component<{}, PlaygroundState> {
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

        function exchangeTheCard() {
            return '';
        }

        return (
            <div className="Desktop">
                <div className="DeckPile">
                    {
                        this.state.opened1.map((card, index) => (
                            <div onClick={exchangeTheCard} key={index.toString()}>
                                <Card data={card} />
                            </div>
                        ))
                    }
                </div>
                <div className="DeckPile">
                    {
                        this.state.opened2.map((card, index) => (
                            <div onClick={exchangeTheCard} key={index.toString()}>
                                <Card data={card} />
                            </div>
                        ))
                    }
                </div>
                <div className="DeckPile">
                    {
                        this.state.opened3.map((card, index) => (
                            <div onClick={exchangeTheCard} key={index.toString()}>
                                <Card data={card} />
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}
