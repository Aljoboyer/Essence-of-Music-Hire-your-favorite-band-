import React from 'react';
import './Musician.css'
const Musician = (props) => {
    const {name,formedIn,popularAlbum,genre,concertCharge,img } = props.musician
    return (
        <div className="musician">
            <img className="images" src={img} alt="" />
            <div className="description">
                <h3>Band Name : {name}</h3>
                <h5>Formed In : {formedIn}</h5>
                <h5>Popular Album : {popularAlbum}</h5>
                <h5>Genre : {genre}</h5>
                <h4>Concert Charge : {concertCharge}</h4>
                <button onClick={() => props.CartHandling(props.musician)} className="hire-btn">Hire For Concert</button>
            </div>
        </div>
    );
};

export default Musician;