import * as React from 'react';
import './TokenPiles.css';
import Token from './Token';

export default class TokenPiles extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <div className="TokenPiles">
                <Token />
                <Token />
                <Token />
                <Token />
                <Token />
            </div>
        );
    }
}
