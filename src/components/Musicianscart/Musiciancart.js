import React from 'react';
import Cartname from './Cartname'
const Musiciancart = (props) => {
    const {musiciancart} = props
    let totalcharge = 0;
    for(const musician of musiciancart)
        {
            totalcharge = totalcharge + musician.concertCharge
        }
    return (
        <div>
            <h1>Hiring Cart</h1>
            <h3>Band Added : {props.musiciancart.length}</h3>
            <div className="names">
                {
                    musiciancart.map(musician => <Cartname key={Math.floor((Math.random() * 10000) + 1)} name={musician.name}></Cartname>)
                }
            </div>
            <h4>Total Charge : {totalcharge}</h4>
        </div>
    );
};

export default Musiciancart;