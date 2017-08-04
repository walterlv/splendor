import React, { Component } from 'react';
import './Playground.css'
import Card from './Card.js'

export default class Playground extends Component {
    render() {
        return (
            <div className="Playground">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        );
    }
}
