import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function FilmsPresentation ( { films } ) {
    console.log( films );// in ra all gia tri
    const [film, setFilm] = useState( 0 );
    const { theme, toggle, dark } = useContext( ThemeContext );
    return (
        <div>
            <div className='film-container'>
                {films.map( ( film ) =>
                    <div className='column'>
                        <div className='film-card'>
                            <div className='film-card-img'>
                                <img src={film.img} />
                            </div>
                            <h1>
                                {film.title}
                            </h1>

                            <br></br>

                            <hr className='hr-content'></hr>

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
                                    <a
                                        style={{
                                            textDecoration: 'none',
                                            outline: 'none'
                                        }}
                                        href='#popup1'
                                        id='openPopUp'
                                    >
                                        <button className='switch-mode'
                                            style={{
                                                color: theme.color,
                                                backgroundColor: theme.backgroundColor,
                                                textDecoration: 'none',
                                                outline: 'none',
                                                border: 'none'
                                            }}
                                            href='#popup1'
                                            id='openPopUp'
                                            onClick={( toggle ) => { setFilm( film ); }}>
                                            Detail
                                        </button>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                )}
                <div id='popup1' className='overlay'>
                    <div className='film-popup'>
                        <img src={film.img} />
                        <a className='close' href='#'>&times;</a>
                        <h2 className='content'>{film.title}</h2>
                        <div className='content'>
                            {film.info}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
