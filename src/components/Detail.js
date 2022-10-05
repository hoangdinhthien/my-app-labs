import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../shared/ListOfFilms';

export default function Detail () {
    const filmName = useParams();
    const title = data.find( obj =>
        obj.id == filmName.id );
    useEffect( () => {
        console.log( filmName );
        console.log( title );
    }, [filmName] );
    return (
        <div className="film-detail-container">
            <div className="product-card">
                <div className="title">{title.year}</div>
                <div className="product-tumb">
                    <img src={`../${title.img}`} />
                </div>
                <div className="product-details">
                    <h3>{title.nation}</h3>
                    <div className="product-title">{title.title} </div>
                    <p>{title.info}</p>
                    <div className="product-bottom-details"></div>
                </div>
            </div>
        </div>
    );
}
