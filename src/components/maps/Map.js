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
                  {/* <g transform="translate(-12, -24)">
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
                  </g> */}
                  <g id="group-70svg">
		<path id="path-1_66_" d="M52.69,52.824c-0.829,0-1.501-0.671-1.501-1.5c0-9.578-7.792-17.371-17.371-17.371
			s-17.372,7.793-17.372,17.371c0,0.829-0.672,1.5-1.5,1.5s-1.5-0.671-1.5-1.5c0-11.232,9.139-20.371,20.372-20.371
			s20.371,9.139,20.371,20.371C54.189,52.153,53.518,52.824,52.69,52.824z"/>
		<path id="path-2_66_" d="M33.818,33.393c-6.516,0-11.817-5.301-11.817-11.817c0-6.515,5.301-11.816,11.817-11.816
			s11.817,5.301,11.817,11.816C45.635,28.092,40.334,33.393,33.818,33.393z M33.818,12.76c-4.862,0-8.817,3.955-8.817,8.816
			c0,4.862,3.955,8.817,8.817,8.817s8.817-3.955,8.817-8.817C42.635,16.715,38.68,12.76,33.818,12.76z"/>
		<path id="path-3_54_" d="M13.045,48.51H1.5c-0.828,0-1.5-0.672-1.5-1.5c0-9.665,7.319-16.953,17.025-16.953
			c2.963,0,5.893,0.825,8.708,2.453c0.717,0.415,0.962,1.332,0.548,2.05c-0.415,0.717-1.333,0.962-2.05,0.548
			c-2.353-1.362-4.777-2.051-7.206-2.051c-7.484,0-13.247,5.256-13.952,12.453h9.972c0.828,0,1.5,0.672,1.5,1.5
			S13.873,48.51,13.045,48.51z"/>
		<path id="path-4_33_" d="M17.095,32.811c-5.529,0-10.026-4.498-10.026-10.026S11.566,12.76,17.095,12.76
			c2.678,0,5.195,1.043,7.089,2.936c0.586,0.586,0.586,1.537,0,2.122c-0.586,0.586-1.536,0.586-2.121,0
			c-1.328-1.327-3.091-2.058-4.968-2.058c-3.874,0-7.026,3.151-7.026,7.025c0,3.873,3.152,7.026,7.026,7.026
			c2.303,0,4.464-1.133,5.778-3.029c0.472-0.681,1.406-0.85,2.087-0.378c0.681,0.472,0.851,1.407,0.378,2.087
			C23.463,31.194,20.382,32.811,17.095,32.811z"/>
		<path id="path-5_16_" d="M61.083,48.51h-8.038c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5h6.456
			c-0.705-6.411-5.881-11.581-12.588-12.307c-0.735-0.079-1.304-0.683-1.337-1.422c-0.034-0.739,0.476-1.393,1.201-1.539
			c3.345-0.675,5.681-3.466,5.681-6.789c0-3.819-3.603-7.297-7.56-7.297c-0.828,0-1.5-0.671-1.5-1.5c0-0.829,0.672-1.5,1.5-1.5
			c5.625,0,10.56,4.812,10.56,10.297c0,3.166-1.466,5.993-3.845,7.818c6.482,2.469,10.97,8.626,10.97,15.739
			C62.583,47.838,61.911,48.51,61.083,48.51z"/>
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

