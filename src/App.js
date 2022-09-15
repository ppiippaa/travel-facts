import React from 'react';
import './App.css';
import { SearchPage } from './components/searchPage/SearchPage';
import { FactPage} from "./components/factPage/FactPage";
import { Error} from "./components/error/Error";


export class App extends React.Component {
  constructor(props) {
      super(props);
      this.getFacts = this.getFacts.bind(this);
      this.captureCountry = this.captureCountry.bind(this);
      this.resetCountry = this.resetCountry.bind(this);
      this.state = {};
  }

  captureCountry(e) {
    const countryRaw = e.target.value;
    // format no & symbols (need to be 'and') !!!!!! ****** !!!!!! ****** !!!!!! ****** !!!!!! ******
      const countryFormatted = countryRaw.charAt(0).toUpperCase() + countryRaw.slice(1);

    this.setState({
        country: countryFormatted
    })
      return countryFormatted;
  }

  async getFacts() {
      const searchCountry = this.state.country
      const urlFormatted = `https://travelbriefing.org/${searchCountry}?format=json`

      try {
          const response = await fetch(urlFormatted);
          if (response.ok) {
              const jsonResponse = await response.json()

              this.setState({
                  countryName: jsonResponse['names']['name'],
                  fullName: jsonResponse['names']['full'],
                  timezone: jsonResponse['timezone']['name'],
                  language: jsonResponse['language'][0]['language'],
                  plugType: jsonResponse['electricity']['plugs'],
                  currency: jsonResponse['currency']['name'],
                  policeNumber: jsonResponse['telephone']['police'],
                  ambulanceNumber: jsonResponse['telephone']['ambulance'],
                  waterQuality: jsonResponse['water']['short']
              })
              console.log(this.state.fullName, this.state.currency, this.state.policeNumber, this.state.plugType)
          }
      } catch (error) {
          console.log(error)
      }
  }

  resetCountry() {
      this.setState({
          fullName: '',
          timezone: '',
          language: '',
          plugType: '',
          currency: '',
          policeNumber: '',
          ambulanceNumber: '',
          waterQuality: ''
      });
  }

  render() {
      if (!this.state.fullName) {
          return (
              <div className='main-container'>
                  <SearchPage captureCountry={this.captureCountry} getFacts={this.getFacts}/>
              </div>
          )
      } else if (this.state.country !== this.state.countryName) {
          return (
              <div className='main-container'>
                  <Error resetCountry={this.resetCountry}/>
              </div>

          )
      } else {
          return (
              <div className='main-container'>
                  <FactPage
                      resetCountry={this.resetCountry}
                      fullName={this.state.fullName}
                      timezone={this.state.timezone}
                      language={this.state.language}
                      plugType={this.state.plugType}
                      currency={this.state.currency}
                      vaccinations={this.state.vaccinations}
                      policeNumber={this.state.policeNumber}
                      ambulanceNumber={this.state.ambulanceNumber}
                      waterQuality={this.state.waterQuality}
                  />
              </div>
          )
      }
   }
 }



export default App;
