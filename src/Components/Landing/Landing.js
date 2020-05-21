import React, {useEffect} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getFandoms} from '../../redux/reducers/fandomReducer';
import {Link} from 'react-router-dom';
import './Landing.css';

const Landing = props => {
    useEffect(() => {
        axios.get('/api/fandoms')
        .then(res => props.getFandoms(res.data))
        .catch(err => console.log(err))
    }, [props])


    return (
        <div className='landing'>
            <h1>Pick Your Fandom</h1>
            <section className='fandom-flex'>
                {props.fandomArr.map((fandom, i) => (
                    <Link to={`/fandom/${fandom.fandom_id}`} key={i} className='fandom-container'>
                        <img src={fandom.image} alt={fandom.name}/>
                    </Link>
                ))}
            </section>
        </div>
    )
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {getFandoms})(Landing);