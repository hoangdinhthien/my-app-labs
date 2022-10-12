import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../shared/ListOfFilms';
import ModelCase from "./ModelCase";
import { useState } from "react";
import { Icon, CardTitle, Row, Col, Card, Container } from 'react-materialize';

export default function Detail () {
    const filmName = useParams();
    const title = data.find( obj =>
        obj.id == filmName.id );
    useEffect( () => {
        console.log( filmName );
        console.log( title );
    }, [filmName] );
    const [isOpen, setIsOpen] = useState( false );

    return (
        // <div className="film-detail-container">
        //     <div className="product-card">
        //         <div className="title">{title.year}</div>
        //         <div className="product-tumb">
        //             <img src={`../${title.img}`} />
        //         </div>
        //         <div className="product-details">
        //             <h3>{title.nation}</h3>
        //             <div className="product-title">{title.title} </div>
        //             <p>{title.info}</p>
        //             <div className="product-bottom-details"></div>
        //         </div>
        //     </div>
        // </div>
        <Container>
            <Card>
                <div className="card-img">
                    <img src={`../${title.img}`} />
                    <span className="card-title">{title.title}</span>

                </div>
                <div className="product-details">
                    <h5 product-club-cost>{title.nation}</h5>

                    <div className="product-bottom-details">
                        <h6>{title.year} </h6>
                        <p>{title.info}</p>
                    </div>
                </div>
            </Card>

            <a onClick={() => setIsOpen( true )}
                className='btn-floating haftway-fab waves-effect waves-light red'
            >
                <Icon>ondemand_video</Icon>
            </a>
            {isOpen && <ModelCase setIsOpen={setIsOpen} film={title} />}
        </Container>

    );
}
