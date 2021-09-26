import React from 'react';
import Cartname from './Cartname';
import './Musiciancart.css'
const Musiciancart = (props) => {
    const {musiciancart} = props
    let totalcharge = 0;
    for(const musician of musiciancart)
        {
            totalcharge = totalcharge + musician.concertCharge
        }
    return (
        <div className="musician-cart">
            <h1 className="title">Hiring Cart</h1>
            <h3><i className="fas fa-guitar"></i> Band Added :  {props.musiciancart.length}</h3>
            <div className="names">
                {
                    musiciancart.map(musician => <Cartname key={Math.floor((Math.random() * 10000) + 1)} name={musician.name}></Cartname>)
                }
            </div>
            <h4>Total Charge : $ {totalcharge}</h4>
        </div>
    );
};

export default Musiciancart;