import { useEffect, useState } from 'react';
import './Musicianslayout.css'
import Musician from '../Musicians/Musician';
import Musiciancart from '../Musicianscart/Musiciancart'
const Musicianslayout = () => {
    const [musicians, setMusicians] = useState([]);
    const [musiciancart, setMusiciancart] = useState([])
    useEffect(() => {
        fetch('./musicians.JSON')
        .then(res => res.json())
        .then(data => setMusicians(data))
    },[])
    const CartHandling = (musician) => {
        setMusiciancart([...musiciancart, musician])
    }
    return (
        <div className="Musicianslayout">
            <div className="musicians">
                {
                    musicians.map(musician => 
                        <Musician key={Math.floor((Math.random() * 200000) + 1)} CartHandling={CartHandling} musician={musician}></Musician>
                    )
                }
            </div>
            <div className="musicians-cart">
                
                <Musiciancart musiciancart={musiciancart}></Musiciancart>
                  
            </div>
        </div>
    );
};

export default Musicianslayout;