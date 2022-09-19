import React from 'react';
import { Films } from '../shared/ListOfFilms';
export default function FilmsPresentation ( { films } ) {
    console.log( films );
    return (
        <div>
            <div className='container'>
                {Films.map( ( film ) =>
                    <div className='column'>
                        <div className='film-card'>
                            <div className='film-card-img'>
                                <img src={film.img} />
                            </div>
                            <h2>
                                {film.title}
                            </h2>
                            <div className='film-content'>
                                <p className='film-content-item'>
                                    Year: {film.year}
                                </p>
                                <p className='film-content-item'>
                                    Nation: {film.nation}
                                </p>
                            </div>
                            <div className='card-btn'>
                                <p>
                                    <button>
                                        Detail
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
