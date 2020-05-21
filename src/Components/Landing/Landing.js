import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Landing.css';

export default props => {
    let [fandomArr, setFandomArr] = useState([]);

    useEffect(() => (
        axios.get('/api/fandoms')
        .then(res => setFandomArr(res.data))
        .catch(err => console.log(err))
    ), [])


    return (
        <div className='landing'>
            <h1>Pick Your Fandom</h1>
            <section className='fandom-flex'>
                {fandomArr.map((fandom, i) => (
                    <div className='fandom-container'>
                        <img src={fandom.image} alt={fandom.name}/>
                    </div>
                ))}
            </section>
        </div>
    )
}