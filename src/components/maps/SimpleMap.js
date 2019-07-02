import React, { Component } from 'react'
import { Map as LeafletMap, GeoJSON, Marker, Popup, CircleMarker, VideoOverlay } from 'react-leaflet';
import L from 'leaflet'
import worldGeoJSON from 'geojson-world-map';
import "leaflet/dist/leaflet.css";
// import "leaflet/dist/leaflet.awesome-markers.js
import data from '../../cities'
import lotOfCities from '../../static/lotsOfCities.json'

export const pointerIcon = new L.Icon({
  iconUrl: require('../../assets/pointerIcon.svg'),
  iconRetinaUrl: require('../../assets/pointerIcon.svg'),
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [25, 55],
  shadowUrl: '../../assets/marker-shadow.png',
  shadowSize: [68, 95],
  shadowAnchor: [20, 92],
})
let latTest;
let longTest;
// let marker = new L.Marker([17.385044, 78.486671]);
let citybranch;
// let filteredCities;

export class SimpleMap extends Component {
  render() {
    const filteredCities = lotOfCities.filter(city => city.country === "Liberia")
    return (
      <LeafletMap
        style={{
            width: 'auto',
            height: '750px',
            backgroundColor: 'white'
            // backgroundColor: '#F3F6FA'
        }}
        center={[50, 20]}
        zoom={2}
        // maxZoom={10}
        attributionControl={false}
        zoomControl={false}
        doubleClickZoom={false}
        scrollWheelZoom={false}
        dragging={false}
        animate={false}
        easeLinearity={0.35}
      >
        <GeoJSON
          data={worldGeoJSON}
          style={() => ({
            color: '#4a83ec',
            weight: 0.5,
            fillColor: "#1a1d62",
            fillOpacity: .9,
          })}
        /> 
  {
  
    filteredCities.map((city) => {
       return (
              <CircleMarker
                center={[city["coordinates"][0], city["coordinates"][1]]}
                radius={20 * Math.log(city["population"] / 500000)}
                // radius={cityScale(city.population)}
  fillOpacity={0.5}
  stroke={false}
  fillColor={city.color}
              />)
          })
          }
        <Marker 
        icon={pointerIcon}
        position={[50, 50]}>
        {/* position={[l1, l2]}> */}
          <Popup>
            You are Here!! Become a part of the movement!
          </Popup>
        </Marker>
      </LeafletMap>
    );
  }
  }