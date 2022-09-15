import './FactPage.css';
import { FactCard } from "./FactCard";
import { ReturnButton} from "./ReturnButton";
import React from 'react';

export class FactPage extends React.Component {
    render() {
        return (
            <div className='main-container'>
                <div className='card-container'>
                    <FactCard fact={this.props.fullName} factName={'Full Name'}/>
                    <FactCard fact={this.props.timezone} factName={'Time Zone'}/>
                    <FactCard fact={this.props.language} factName={'Language'}/>
                    <FactCard fact={this.props.plugType} factName={'Plug Type'}/>
                    <FactCard fact={this.props.currency} factName={'Currency'}/>
                    <FactCard fact={this.props.policeNumber} factName={'Police Number'}/>
                    <FactCard fact={this.props.ambulanceNumber} factName={'Ambulance Number'}/>
                    <FactCard fact={this.props.waterQuality} factName={'Water Quality'}/>
                    <div className='button-container'>
                        <ReturnButton resetCountry={this.props.resetCountry}/>
                    </div>

                </div>
            </div>

        )
    }

}