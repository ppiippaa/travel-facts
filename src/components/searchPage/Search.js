import './Search.css';
import React from 'react';

export class Search extends React.Component {
    render() {
        return (
            <div className='search-container'>
                <h1>TRAVEL FACTS</h1>
                <input placeholder='Select your destination' type="text" className='search-bar' onChange={this.props.captureCountry}/>
                <button className='search-button' onClick={this.props.getFacts}>GET FACTS</button>
            </div>
        )
    }

}