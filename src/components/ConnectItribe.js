import React, { Component } from 'react'
import { Button, Checkbox, Dropdown, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import Geosuggest from 'react-geosuggest';

export class Connectitribe extends Component {
    constructor (props) {
        super(props);
        this.state = { country: '', region: '' };
      }
     
      selectCountry (val) {
        this.setState({ country: val });
      }
     
      selectRegion (val) {
        this.setState({ region: val });
      }

  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { country } = this.state;
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Field control={Input} label='User Name' placeholder='User Name' />
          <Form.Field control={Input} label='Email' placeholder='Email' />
          {/* <Form.Field control={Select} label='Gender' options={options} placeholder='Gender' /> */}
        </Form.Group>
        <Form.Group>
        {/* <CountryDropdown
            style={{
                height: '3em'
            }}
            defaultOptionLabel="Israel"
            value={country}
            onChange={(val) => this.selectCountry(val)} /> */}
            {/* <Dropdown 
                placeholder='Select Country'
                search
                selection
                options={country}
                onChange={(val) => this.selectCountry(val)}
            /> */}
             
            {/* <Geosuggest 
                placeholder='Dallas'
                onSuggestSelect={this.onSuggestSelect}

                location='google.maps.LatLng(53.558572, 9.9278215)'
                /> */}
            <Form.Field control={Input} label='Location' placeholder='Location' />
        </Form.Group>
        {/* <Form.Group inline>
          <label>Quantity</label>
          <Form.Field
            control={Radio}
            label='One'
            value='1'
            checked={value === '1'}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label='Two'
            value='2'
            checked={value === '2'}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label='Three'
            value='3'
            checked={value === '3'}
            onChange={this.handleChange}
          />
        </Form.Group> */}
        <Form.Field control={TextArea} label='About' placeholder='Tell us more about you...' />
        <Form.Field control={Checkbox} label='I agree to the Terms and Conditions*' />
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    )
  }
}

