import React from 'react';

export default function PlayersPresentation ( { players } ) {
    console.log( players );
    return (
        <div>
            <div className='container'>
                {players.map( ( player ) =>
                    <div className='column'>
                        <div className='card'>
                            <div className='card-img'>
                                <img src={player.img} />
                            </div>
                            <h3>
                                {player.name}
                            </h3>
                            <p className='title'>
                                {player.club}
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
