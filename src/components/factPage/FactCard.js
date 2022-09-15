import './FactCard.css';
import React from 'react';

export class FactCard extends React.Component {
    render() {


        if (!this.props.fact) {
            return (
                <div className='fact-container'>
                    <h2 className='fact-title'>{this.props.factName}:</h2>
                    <h2 className='fact-text'>N/A</h2>
                </div>
            )
        } else {
            return (
                <div className='fact-container'>
                    <h2 className='fact-title'>{this.props.factName}:</h2>
                    <h2 className='fact-text'>{this.props.fact}</h2>
                    <img className='factImage' src={`./factIcons/${this.props.factName}.png`} alt=""/>
                </div>
            )
        }

    }
}