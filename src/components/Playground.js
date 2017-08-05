import React, { Component } from 'react';
import './Playground.css';
import Card from './Card';
import SplendorGame from '../game/SplendorGame';

export default class Playground extends Component {
    constructor(props) {
        super(props);
        const sg = new SplendorGame();
        this.state = {
            game: sg,
            opened: {
                deck0: sg.flop(0, 4),
                deck1: sg.flop(1, 4),
                deck2: sg.flop(2, 4),
            },
        };
    }

    render() {
        return (
            <div className="Playground">
                <div className="GroundDeck">
                    {
                        this.state.opened.deck0.map(card => (
                            <Card data={card} />
                        ))
                    }
                </div>
                <div className="GroundDeck">
                    {
                        this.state.opened.deck1.map(card => (
                            <Card data={card} />
                        ))
                    }
                </div>
                <div className="GroundDeck">
                    {
                        this.state.opened.deck2.map(card => (
                            <Card data={card} />
                        ))
                    }
                </div>
            </div>
        );
    }
}
