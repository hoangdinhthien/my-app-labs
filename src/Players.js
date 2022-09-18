import React, { Component } from 'react';

export default class player extends Component {
    render () {
        return (
            <div className='container'>
                <div className='column'>
                    <div className='card'>
                        <div className='card-img'>
                            <img src='assets/images/cr.jpg' />
                        </div>
                        <h3>
                            Cristiano Ronaldo
                        </h3>
                        <p className='title'>
                            Manchester United
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
                <div className='column'>
                    <div className='card'>
                        <div className='card-img'>
                            <img src='assets/images/kante.jpg' />
                        </div>
                        <h3>
                            Kante
                        </h3>
                        <p className='title'>
                            Chelsea
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
                <div className='column'>
                    <div className='card'>
                        <div className='card-img'>
                            <img src='assets/images/messi.jpg' />
                        </div>
                        <h3>
                            Messi
                        </h3>
                        <p className='title'>
                            PSG
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
                <div className='column'>
                    <div className='card'>
                        <div className='card-img'>
                            <img src='assets/images/neymar.jpg' />
                        </div>
                        <h3>
                            Neymar
                        </h3>
                        <p className='title'>
                            PSG
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
                <div className='column'>
                    <div className='card'>
                        <div className='card-img'>
                            <img src='assets/images/kane.jpg' />
                        </div>
                        <h3>
                            Kane
                        </h3>
                        <p className='title'>
                            Tottenham
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
                <div className='column'>
                    <div className='card'>
                        <div className='card-img'>
                            <img src='assets/images/haaland.jpg' />
                        </div>
                        <h3>
                            Haaland
                        </h3>
                        <p className='title'>
                            Manchester City
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
            </div>
        );
    }
}
