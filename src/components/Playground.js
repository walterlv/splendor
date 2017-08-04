import React, { Component } from 'react';
import './Playground.css'
import Card from './Card.js'
import model from '../data/model.js'

export default class Playground extends Component {
    constructor() {
        super();
        this.state = {
            opened: {
                deck0: model.decks.deck0,
                deck1: model.decks.deck0,
                deck2: model.decks.deck0
            }
        }
    }

    render() {
        return (
            <div className="Playground">
                <div className="GroundDeck">
                    {
                        this.state.opened.deck0.map((card, index) => (
                            <Card data={card}/>
                        ))
                    }
                </div>
                <div className="GroundDeck">
                    {
                        this.state.opened.deck1.map((card, index) => (
                            <Card data={card}/>
                        ))
                    }
                </div>
                <div className="GroundDeck">
                    {
                        this.state.opened.deck2.map((card, index) => (
                            <Card data={card}/>
                        ))
                    }
                </div>
            </div>
        );
    }

    initializePlaygroundCards(model) {
        this.state.decks = model.decks.deck0;
    }

    readTextFile(file, callback) {
        var rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function() {
            if (rawFile.readyState === 4 && rawFile.status == "200") {
                callback(rawFile.responseText);
            }
        }
        rawFile.send(null);
    }
}
