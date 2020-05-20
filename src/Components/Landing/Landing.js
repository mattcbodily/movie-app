import React, {useState} from 'react';
import './Landing.css';

export default props => {
    let [fandomArr, setFandomArr] = useState([{name: 'Star Wars', image: 'https://clipart.info/images/ccovers/1513370389Star%20Wars%20Logo%20transparent%20PNG.png'}, {name: 'Marvel', image: 'https://img.pngio.com/marvel-logos-download-marvel-logo-png-5000_2000.png'}, {name: 'Harry Potter', image: 'https://img.pngio.com/harry-potter-logo-transparent-png-stickpng-harry-potter-logo-transparent-300_217.png'}])


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