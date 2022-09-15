import './ReturnButton.css';
import React from 'react';

export class ReturnButton extends React.Component {
    render() {
        return (
            <div className='return-button-container'>
                <button className='return-button' onClick={this.props.resetCountry}>SEARCH AGAIN</button>
            </div>
        )
    }

}