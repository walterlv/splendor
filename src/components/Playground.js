import React, { Component } from 'react';
import './Playground.css';
import Card from './Card';
import model from '../data/model';

export default class Playground extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: {
                deck0: model.decks.deck0,
                deck1: model.decks.deck1,
                deck2: model.decks.deck2,
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
