import './Error.css';
import { ReturnButton } from "../factPage/ReturnButton";
import React from 'react';

export class Error extends React.Component {
    render() {
        return(
            <div className='error-container'>
                <h1 className='error-message'>Country not found :(</h1>
                <ReturnButton resetCountry={this.props.resetCountry}/>
            </div>
        )
    }
}