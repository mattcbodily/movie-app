import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {movieKey} from '../../config';
import './FandomDash.css';

const FandomDash = props => {
    let [fandom, setFandom] = useState({}),
        [movies, setMovies] = useState([]);

    useEffect(() => {
        setFandom(props.fandomArr.find(element => element.fandom_id === +props.match.params.id));
        if(fandom.fandom_name){
            axios.get(`http://www.omdbapi.com/?s=${fandom.fandom_name}&apikey=${movieKey}`)
            .then(res => setMovies(res.data))
            .catch(err => console.log(err));
        }
    }, [fandom.fandom_name, props.fandomArr, props.match.params.id]);

    console.log(movies)

    return (
        <div className='fandom-dash'>
            <img src={fandom.image} alt={fandom.fandom_name}/>
        </div>
    )
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(FandomDash);