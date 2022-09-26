import React, { Component } from 'react';
import { Films } from '../shared/ListOfFilms';
import FilmsPresentation from './FilmsPresentation';
export class MainFilms extends Component {
    constructor() {
        super();
        this.state = {
            films: Films,
        };
    }
    render () {
        return <FilmsPresentation films={this.state.films} />;
    }
}

export default MainFilms;
