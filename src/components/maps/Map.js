import React, { Component } from "react"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
} from "react-simple-maps"
import { scaleLinear } from "d3-scale"
import ReactTooltip from "react-tooltip"
import Geocode from "react-geocode";


import geographyFile from '../../static/world-50m.json'
import cities from '../../static/world-most-populous-cities.json'

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
  marginTop: "2em"
}

const cityScale = scaleLinear()
  .domain([0,37843000])
  .range([1,25])

  const INITIAL_STATE = {
     markers : [
        { markerOffset: -35, name: "Buenos Aires", coordinates: [-58.3816, -34.6037] },
        { markerOffset: -35, name: "La Paz", coordinates: [-68.1193, -16.4897] },
        { markerOffset: 15, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
        { markerOffset: 15, name: "Santiago", coordinates: [-70.6693, -33.4489] },
        { markerOffset: 15, name: "Bogota", coordinates: [-74.0721, 4.7110] },
        { markerOffset: 15, name: "Quito", coordinates: [-78.4678, -0.1807] },
        { markerOffset: -35, name: "Georgetown", coordinates: [-58.1551, 6.8013] },
        { markerOffset: -35, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
        { markerOffset: 15, name: "Paramaribo", coordinates: [-55.2038, 5.8520] },
        { markerOffset: 15, name: "Montevideo", coordinates: [-56.1645, -34.9011] },
        { markerOffset: -35, name: "Caracas", coordinates: [-66.9036, 10.4806] },
        { markerOffset: -35, name: "Tokyo", "coordinates": [139.6917,35.6895], "population": 37843000 },
        { markerOffset: -35, name: "Jakarta", "coordinates": [106.8650,-6.1751], "population": 30539000 },
        { markerOffset: -35, name: "Delhi", "coordinates": [77.1025,28.7041], "population": 24998000 },
        { markerOffset: -35, name: "Manila", "coordinates": [120.9842,14.5995], "population": 24123000 },
        { markerOffset: -35, name: "Seoul", "coordinates": [126.9780,37.5665], "population": 23480000 },
        { markerOffset: -35, name: "Shanghai", "coordinates": [121.4737,31.2304], "population": 23416000 },
        { markerOffset: -35, name: "Karachi", "coordinates": [67.0099,24.8615], "population": 22123000 },
        { markerOffset: -35, name: "Beijing", "coordinates": [116.4074,39.9042], "population": 21009000 },
        { markerOffset: -35, name: "New York", "coordinates": [-74.0059,40.7128], "population": 40630000 },
        { markerOffset: -35, name: "Guangzhou", "coordinates": [113.2644,23.1291], "population": 20597000 },
        { markerOffset: -35, name: "Sao Paulo", "coordinates": [-46.6333,-23.5505], "population": 20365000 },
        { markerOffset: -35, name: "Mexico City", "coordinates": [-99.1332,19.4326], "population": 20063000 },
        { markerOffset: -35, name: "Mumbai", "coordinates": [72.8777,19.0760], "population": 17712000 },
        { markerOffset: -35, name: "Osaka", "coordinates": [135.5022,34.6937], "population": 37444000 },
        { markerOffset: -35, name: "Moscow", "coordinates": [37.6173,55.7558], "population": 16170000 },
        { markerOffset: -35, name: "Dhaka", "coordinates": [90.4125,23.8103], "population": 15669000 },
        { markerOffset: -35, name: "Greater Cairo", "coordinates": [31.2357,30.0444], "population": 35600000 },
        { markerOffset: -35, name: "Los Angeles", "coordinates": [-118.2437,34.0522], "population": 15058000 },
        { markerOffset: -35, name: "Bangkok", "coordinates": [100.5018,13.7563], "population": 14998000 },
        { markerOffset: -35, name: "Kolkata", "coordinates": [88.3639,22.5726], "population": 14667000 },
        { markerOffset: -35, name: "Buenos Aires", "coordinates": [-58.3816,-34.6037], "population": 14122000 },
        { markerOffset: -35, name: "Tehran", "coordinates": [51.3890,35.6892], "population": 13532000 },
        { markerOffset: -35, name: "Istanbul", "coordinates": [28.9784,41.0082], "population": 43287000 },
        { markerOffset: -35, name: "Lagos", "coordinates": [3.3792,6.5244], "population": 13123000 },
        { markerOffset: -35, name: "Shenzhen", "coordinates": [114.0579,22.5431], "population": 12084000 },
        { markerOffset: -35, name: "Rio de Janeiro", "coordinates": [-43.1729,-22.9068], "population": 11727000 },
        { markerOffset: -35, name: "Kinshasa", "coordinates": [15.2663,-4.4419], "population": 11587000 },
        { markerOffset: -35, name: "Tianjin", "coordinates": [117.3616,39.3434], "population": 10920000 },
        { markerOffset: -35, name: "Paris", "coordinates": [2.3522,48.8566], "population": 30858000 },
        { markerOffset: -35, name: "Lima", "coordinates": [-77.0428,-12.0464], "population": 10750000 }
      ]
  }
  const markers = [
    { markerOffset: -35, name: "Buenos Aires", coordinates: [-58.3816, -34.6037] },
    { markerOffset: -35, name: "La Paz", coordinates: [-68.1193, -16.4897] },
    { markerOffset: 15, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
    { markerOffset: 15, name: "Santiago", coordinates: [-70.6693, -33.4489] },
    { markerOffset: 15, name: "Bogota", coordinates: [-74.0721, 4.7110] },
    { markerOffset: 15, name: "Quito", coordinates: [-78.4678, -0.1807] },
    { markerOffset: -35, name: "Georgetown", coordinates: [-58.1551, 6.8013] },
    { markerOffset: -35, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
    { markerOffset: 15, name: "Paramaribo", coordinates: [-55.2038, 5.8520] },
    { markerOffset: 15, name: "Montevideo", coordinates: [-56.1645, -34.9011] },
    { markerOffset: -35, name: "Caracas", coordinates: [-66.9036, 10.4806] },
    { markerOffset: -35, name: "Tokyo", "coordinates": [139.6917,35.6895], "population": 37843000 },
    { markerOffset: -35, name: "Jakarta", "coordinates": [106.8650,-6.1751], "population": 30539000 },
    { markerOffset: -35, name: "Delhi", "coordinates": [77.1025,28.7041], "population": 24998000 },
    { markerOffset: -35, name: "Manila", "coordinates": [120.9842,14.5995], "population": 24123000 },
    { markerOffset: -35, name: "Seoul", "coordinates": [126.9780,37.5665], "population": 23480000 },
    { markerOffset: -35, name: "Shanghai", "coordinates": [121.4737,31.2304], "population": 23416000 },
    { markerOffset: -35, name: "Karachi", "coordinates": [67.0099,24.8615], "population": 22123000 },
    { markerOffset: -35, name: "Beijing", "coordinates": [116.4074,39.9042], "population": 21009000 },
    { markerOffset: -35, name: "New York", "coordinates": [-74.0059,40.7128], "population": 40630000 },
    { markerOffset: -35, name: "Guangzhou", "coordinates": [113.2644,23.1291], "population": 20597000 },
    { markerOffset: -35, name: "Sao Paulo", "coordinates": [-46.6333,-23.5505], "population": 20365000 },
    { markerOffset: -35, name: "Mexico City", "coordinates": [-99.1332,19.4326], "population": 20063000 },
    { markerOffset: -35, name: "Mumbai", "coordinates": [72.8777,19.0760], "population": 17712000 },
    { markerOffset: -35, name: "Osaka", "coordinates": [135.5022,34.6937], "population": 37444000 },
    { markerOffset: -35, name: "Moscow", "coordinates": [37.6173,55.7558], "population": 16170000 },
    { markerOffset: -35, name: "Dhaka", "coordinates": [90.4125,23.8103], "population": 15669000 },
    { markerOffset: -35, name: "Greater Cairo", "coordinates": [31.2357,30.0444], "population": 35600000 },
    { markerOffset: -35, name: "Los Angeles", "coordinates": [-118.2437,34.0522], "population": 15058000 },
    { markerOffset: -35, name: "Bangkok", "coordinates": [100.5018,13.7563], "population": 14998000 },
    { markerOffset: -35, name: "Kolkata", "coordinates": [88.3639,22.5726], "population": 14667000 },
    { markerOffset: -35, name: "Buenos Aires", "coordinates": [-58.3816,-34.6037], "population": 14122000 },
    { markerOffset: -35, name: "Tehran", "coordinates": [51.3890,35.6892], "population": 13532000 },
    { markerOffset: -35, name: "Istanbul", "coordinates": [28.9784,41.0082], "population": 43287000 },
    { markerOffset: -35, name: "Lagos", "coordinates": [3.3792,6.5244], "population": 13123000 },
    { markerOffset: -35, name: "Shenzhen", "coordinates": [114.0579,22.5431], "population": 12084000 },
    { markerOffset: -35, name: "Rio de Janeiro", "coordinates": [-43.1729,-22.9068], "population": 11727000 },
    { markerOffset: -35, name: "Kinshasa", "coordinates": [15.2663,-4.4419], "population": 11587000 },
    { markerOffset: -35, name: "Tianjin", "coordinates": [117.3616,39.3434], "population": 10920000 },
    { markerOffset: -35, name: "Paris", "coordinates": [2.3522,48.8566], "population": 30858000 },
    { markerOffset: -35, name: "Lima", "coordinates": [-77.0428,-12.0464], "population": 10750000 }
  ]


export class Map extends Component {
  render() {
    return (
      <div style={wrapperStyles}>
        <ComposableMap
          projectionConfig={{ scale: 235 }}
          width={980}
          height={551}
          style={{
            marginTop: '2em',
            width: "100%",
            height: "auto",
          }}
          >
          <ZoomableGroup center={[0,20]} disablePanning>
            <Geographies geography={geographyFile}>
              {(geographies, projection) =>
                geographies.map((geography, i) =>
                  geography.id !== "ATA" && (
                    <Geography
                      key={i}
                      geography={geography}
                      projection={projection}
                      style={{
                        default: {
                          fill: "#314351",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                        hover: {
                          fill: "#1D5100",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                        pressed: {
                          fill: "#ECEFF1",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                      }}
                    />
              ))}
            </Geographies>
            <Markers>
              {
                cities.map((city, i) => (
                  <Marker key={i} marker={city}>
                    <circle
                      cx={0}
                      cy={0}
                      r={cityScale(city.population)}
                      fill="rgba(255,87,34,0.8)"
                      stroke="#607D8B"
                      strokeWidth="2"
                    />
                  </Marker>
                ))
              }
            </Markers>
            <Markers>
              {markers.map((marker, i) => (
                <Marker
                  key={i}
                  marker={marker}
                  style={{
                    default: { stroke: "white" },
                    hover: { stroke: "#FF5722" },
                    pressed: { stroke: "#FF5722" },
                  }}
                  >
                  <g transform="translate(-12, -24)">
                    <path
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="square"
                      strokeMiterlimit="10"
                      strokeLinejoin="miter"
                      d="M20,9c0,4.9-8,13-8,13S4,13.9,4,9c0-5.1,4.1-8,8-8S20,3.9,20,9z"
                    />
                    <circle
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="square"
                      strokeMiterlimit="10"
                      strokeLinejoin="miter"
                      cx="12"
                      cy="9"
                      r="3"
                    />
                  </g>
                  <text
                    textAnchor="middle"
                    y={marker.markerOffset}
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fill: "#607D8B",
                      stroke: "none",
                    }}
                    >
                    {/* {marker.name} */}
                  </text>
                </Marker>
              ))}
            </Markers>
          </ZoomableGroup>
        </ComposableMap>
        
      </div>
    )
  }
}

