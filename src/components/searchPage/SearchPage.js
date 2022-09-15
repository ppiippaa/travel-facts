import './SearchPage.css';
import { Search } from './Search';
import React from 'react';

export class SearchPage extends React.Component {

    render() {
        return (
            <div className='search-bar-container'>
                <Search captureCountry={this.props.captureCountry} getFacts={this.props.getFacts}/>
            </div>
        )
    }

}