import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import './FandomDash.css';

const FandomDash = props => {
    let [fandom, setFandom] = useState({});

    useEffect(() => {
        setFandom(props.fandomArr.find(element => element.fandom_id === +props.match.params.id));
    }, [props.fandomArr, props.match.params.id]);

    return (
        <div className='fandom-dash'>{fandom.fandom_name}</div>
    )
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(FandomDash);