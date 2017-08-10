import * as React from 'react';
import './OpeningCards.css';
import Card from './Card';
import SplendorGame from '../game/SplendorGame';
import { Deck } from '../data/model';

export interface OpeningCardsProps {
    opened1: Deck[];
    opened2: Deck[];
    opened3: Deck[];
}

export default class OpeningCards extends React.Component<OpeningCardsProps, {}> {
    game: SplendorGame;

    constructor(props: OpeningCardsProps) {
        super(props);
    }

    render() {

        function exchangeTheCard() {
            return '';
        }

        return (
            <div className="OpeningCards">
                <div className="DeckPile">
                    {
                        this.props.opened1.map((card, index) => (
                            <div onClick={exchangeTheCard} key={index.toString()}>
                                <Card data={card} />
                            </div>
                        ))
                    }
                </div>
                <div className="DeckPile">
                    {
                        this.props.opened2.map((card, index) => (
                            <div onClick={exchangeTheCard} key={index.toString()}>
                                <Card data={card} />
                            </div>
                        ))
                    }
                </div>
                <div className="DeckPile">
                    {
                        this.props.opened3.map((card, index) => (
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
