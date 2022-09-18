import React from 'react';
import { Films } from '../shared/ListOfFilms';
export default function films () {
    return (
        <div>
            <div className='container'>
                {Films.map( ( film ) =>
                    <div className='column'>
                        <div className='card'>
                            <div className='card-img'>
                                <img src={film.img} />
                            </div>
                            <h3>
                                {film.name}
                            </h3>
                            <p className='title'>
                                {film.club}
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
