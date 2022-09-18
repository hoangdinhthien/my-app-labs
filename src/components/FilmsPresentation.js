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
                            <p className='film-content'>
                                Year: {film.year}
                            </p>
                            <p className='film-content'>
                                Nation: {film.nation}
                            </p>
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
