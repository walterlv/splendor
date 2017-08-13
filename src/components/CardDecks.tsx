import * as React from 'react';
import './CardDecks.css';
import Card from './Card';
import SplendorGame from '../game/SplendorGame';
import * as Model from '../data/model';

export interface CardDecksProps {
    opened1: Model.Card[];
    opened2: Model.Card[];
    opened3: Model.Card[];
}

export default class OpeningCards extends React.Component<CardDecksProps, {}> {
    game: SplendorGame;

    constructor(props: CardDecksProps) {
        super(props);
    }

    render() {
        return (
            <div className="OpeningCards">
                <div className="DeckPile">
                    {
                        this.props.opened1.map((card, index) => (
                            <Card data={card} level={1} index={index} key={`1,${index.toString()}`} />
                        ))
                    }
                </div>
                <div className="DeckPile">
                    {
                        this.props.opened2.map((card, index) => (
                            <Card data={card} level={2} index={index} key={`2,${index.toString()}`} />
                        ))
                    }
                </div>
                <div className="DeckPile">
                    {
                        this.props.opened3.map((card, index) => (
                            <Card data={card} level={3} index={index} key={`3,${index.toString()}`} />
                        ))
                    }
                </div>
            </div>
        );
    }
}
