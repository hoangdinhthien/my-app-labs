import React from 'react';
import { Players } from './shared/ListOfPlayers';
export default function players () {
    return (
        <div className='container'>
            {Players.map( ( player ) =>
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
    );
}
