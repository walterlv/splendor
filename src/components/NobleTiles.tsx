import * as React from 'react';
import './NobleTiles.css';
import * as Model from '../data/model';
import Noble from './Noble';

export interface NobleTilesProps {
    opened: Model.Noble[];
}

export default class NobleTiles extends React.Component<NobleTilesProps, {}> {
    constructor(props: NobleTilesProps) {
        super(props);
    }

    render() {
        return (
            <div className="NobleTiles">
                {
                    this.props.opened.map(item => (
                        <Noble />
                    ))
                }
            </div>
        );
    }
}
