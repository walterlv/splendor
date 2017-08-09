import React, { Component } from 'react';
import './Desktop.css';
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

        function exchangeTheCard(e) {
            console.log(e);
        }

        return (
            <div className="Desktop">
                <div className="DeckPile">
                    {
                        this.state.opened.deck0.map((card, index) => (
                            <div onClick={exchangeTheCard} key={index.toString()}>
                                <Card data={card} />
                            </div>
                        ))
                    }
                </div>
                <div className="DeckPile">
                    {
                        this.state.opened.deck1.map((card, index) => (
                            <div onClick={exchangeTheCard} key={index.toString()}>
                                <Card data={card} />
                            </div>
                        ))
                    }
                </div>
                <div className="DeckPile">
                    {
                        this.state.opened.deck2.map((card, index) => (
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