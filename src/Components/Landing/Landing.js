import React, {useState} from 'react';
import './Landing.css';

export default props => {
    let [fandomArr, setFandomArr] = useState([])


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