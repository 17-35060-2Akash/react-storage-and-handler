import React, { useEffect, useState } from 'react';
import { gt } from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';
import './Cosmetics.css';

const Cosmetics = () => {

    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, []);

    const total = gt(cosmetics);
    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
            <p>Total: {total}</p>
            <div className='cosmetics'>
                {
                    cosmetics.map(cosmetic => <Cosmetic
                        key={cosmetic.id}
                        cosmetic={cosmetic}></Cosmetic>)
                }
            </div>
        </div>
    );
};

export default Cosmetics;