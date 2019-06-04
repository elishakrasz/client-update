import React, { Component } from "react";

let INITIAL_LOCATION = {
    address: 'London, United Kingdom',
    position: {
      latitude: 51.5085300,
      longitude: -0.1257400
    }
  };
  
  let INITIAL_MAP_ZOOM_LEVEL = 8;
  
  let ATLANTIC_OCEAN = {
    latitude: 29.532804,
    longitude: -55.491477
  };

export default class StateMap extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <form className="form-inline">
                <div className="row">
                  <div className="col-xs-8 col-sm-10">
                    <div className="form-group">
                      <label className="sr-only" htmlFor="address">
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control input-lg"
                        id="address"
                        placeholder="London"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-xs-4 col-sm-2">
                    <button type="submit" className="btn btn-default btn-lg">
                      <span
                        className="glyphicon glyphicon-search"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </form>
              <div className="row">
                <div className="col-sm-12">
                  <p className="bg-info">London, United Kingdom</p>
                  <div className="map" ref={this.setMapElementReference} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
