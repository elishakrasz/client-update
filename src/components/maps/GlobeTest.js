import React, { Component } from "react"
import {
  ComposableMap,
  ZoomableGlobe,
  Geographies,
  Geography,
  Markers,
  Marker,
} from "react-simple-maps"
import { scaleLinear } from "d3-scale"



import cities from "../../static/world-most-populous-cities.json"
import geo from "../../static/world-110m.json"

const populationScale = scaleLinear()
  .domain([10750000,37843000])
  .range([5,22])

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto"
}

const markers = [
    { markerOffset: -35,"name": "Tokyo", "coordinates": [139.6917,35.6895], "population": 37843000 },
    { markerOffset: -35,"name": "Jakarta", "coordinates": [106.8650,-6.1751], "population": 30539000 },
    { markerOffset: -35,"name": "Delhi", "coordinates": [77.1025,28.7041], "population": 24998000 },
    { markerOffset: -35,"name": "Manila", "coordinates": [120.9842,14.5995], "population": 24123000 },
    { markerOffset: -35,"name": "Seoul", "coordinates": [126.9780,37.5665], "population": 23480000 },
    { markerOffset: -35,"name": "Shanghai", "coordinates": [121.4737,31.2304], "population": 23416000 },
    { markerOffset: -35,"name": "Karachi", "coordinates": [67.0099,24.8615], "population": 22123000 },
    { markerOffset: -35,"name": "Beijing", "coordinates": [116.4074,39.9042], "population": 21009000 },
    { markerOffset: -35,"name": "New York", "coordinates": [-74.0059,40.7128], "population": 40630000 },
    { markerOffset: -35,"name": "Guangzhou", "coordinates": [113.2644,23.1291], "population": 20597000 },
    { markerOffset: -35,"name": "Sao Paulo", "coordinates": [-46.6333,-23.5505], "population": 20365000 },
    { markerOffset: -35,"name": "Mexico City", "coordinates": [-99.1332,19.4326], "population": 20063000 },
    { markerOffset: -35,"name": "Mumbai", "coordinates": [72.8777,19.0760], "population": 17712000 },
    { markerOffset: -35,"name": "Osaka", "coordinates": [135.5022,34.6937], "population": 37444000 },
    { markerOffset: -35,"name": "Moscow", "coordinates": [37.6173,55.7558], "population": 16170000 },
    { markerOffset: -35,"name": "Dhaka", "coordinates": [90.4125,23.8103], "population": 15669000 },
    { markerOffset: -35,"name": "Greater Cairo", "coordinates": [31.2357,30.0444], "population": 35600000 },
    { markerOffset: -35,"name": "Los Angeles", "coordinates": [-118.2437,34.0522], "population": 15058000 },
    { markerOffset: -35,"name": "Bangkok", "coordinates": [100.5018,13.7563], "population": 14998000 },
    { markerOffset: -35,"name": "Kolkata", "coordinates": [88.3639,22.5726], "population": 14667000 },
    { markerOffset: -35,"name": "Buenos Aires", "coordinates": [-58.3816,-34.6037], "population": 14122000 },
    { markerOffset: -35,"name": "Tehran", "coordinates": [51.3890,35.6892], "population": 13532000 },
    { markerOffset: -35,"name": "Istanbul", "coordinates": [28.9784,41.0082], "population": 43287000 },
    { markerOffset: -35,"name": "Lagos", "coordinates": [3.3792,6.5244], "population": 13123000 },
    { markerOffset: -35,"name": "Shenzhen", "coordinates": [114.0579,22.5431], "population": 12084000 },
    { markerOffset: -35,"name": "Rio de Janeiro", "coordinates": [-43.1729,-22.9068], "population": 11727000 },
    { markerOffset: -35,"name": "Kinshasa", "coordinates": [15.2663,-4.4419], "population": 11587000 },
    { markerOffset: -35,"name": "Tianjin", "coordinates": [117.3616,39.3434], "population": 10920000 },
    { markerOffset: -35,"name": "Paris", "coordinates": [2.3522,48.8566], "population": 30858000 },
    { markerOffset: -35,"name": "Lima", "coordinates": [-77.0428,-12.0464], "population": 10750000 }
  ]
  

class GlobeTest extends Component {
  render() {
    return (
      <div style={wrapperStyles}>
        <ComposableMap
          projection="orthographic"
          projectionConfig={{
            scale: 300,
          }}
          width={800}
          height={800}
          style={{
            width: "100%",
            height: "auto",
          }}
          >
          <ZoomableGlobe center={[70,20]}>
            <circle cx={400} cy={400} r={300} fill="transparent" stroke="#eceff1" />
            <Geographies geography={geo} disableOptimization>
              {(geographies, projection) =>
                geographies.map((geography, i) => {
                  return (
                    <Geography
                      key={i}
                      round
                      geography={geography}
                      projection={projection}
                      style={{
                        default: {
                          fill: "#eceff1",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                        hover: {
                          fill: "#A6D8E7",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                        pressed: {
                          fill: "green",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                      }}
                    />
                  )
                }
              )}
            </Geographies>
            <Markers>
              {
                cities.map(city => {
                  const radius = populationScale(city.population)
                  return (
                        <Marker
                      key={city.name}
                      marker={city}
                      style={{
                        default: { opacity: 0.8 },
                        hidden: { display: "none" },
                      }}>
                      <circle
                        cx={0}
                        cy={0}
                        r={radius}
                        fill="#F76F6C"
                        stroke="#FFF"
                      />
                      <circle
                        cx={0}
                        cy={0}
                        r={radius + 2}
                        fill="transparent"
                        stroke="#F76F6C"
                      />
                    </Marker>
                    
                  )
                })
              }
            </Markers>
            <Markers>
              {markers.map((marker, i) => (
                <Marker
                  key={i}
                  marker={marker}
                  style={{
                    default: { stroke: "#455A64" },
                    hover: { stroke: "#FF5722" },
                    pressed: { stroke: "#FF5722" },
                    color: "white"
                  }}
                  >
                  <g transform="translate(-12, -24)">
                    <path
                      fill="white"
                      strokeWidth="1"
                      strokeLinecap="square"
                      strokeMiterlimit="10"
                      strokeLinejoin="miter"
                      d="M2,13.7478c0,0.13807,0.11193,0.25,0.25,0.25h3.749v-3h3v3h3.749c0.13807,0,0.25-0.11193,0.25-0.25V7.9987H2&#xA;&#x9;C2,7.9987,2,13.7478,2,13.7478z M13.93,6.5778l-0.9319-0.8189V2c0-0.55228-0.44771-1-1-1s-1,0.44772-1,1v2L7.6808,1.09&#xA;&#x9;C7.5863,0.9897,7.42846,0.98478,7.3279,1.079L7.3169,1.09L1.0678,6.553C0.9734,6.65376,0.97856,6.81197,1.07932,6.90637&#xA;&#x9;C1.12478,6.94896,1.18451,6.97304,1.2468,6.9739L3,6.9989h10.7468c0.13807,0.00046,0.25037-0.1111,0.25083-0.24917&#xA;&#x9;C13.99784,6.68592,13.97365,6.62445,13.93,6.5779V6.5778z"
                    />
                    {/* <path
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="square"
                      strokeMiterlimit="10"
                      strokeLinejoin="miter"
                      d="M20,9c0,4.9-8,13-8,13S4,13.9,4,9c0-5.1,4.1-8,8-8S20,3.9,20,9z"
                    /> */}
                    <path 
                        
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
                    {marker.name}
                  </text>
                </Marker>
              ))}
            </Markers>
          </ZoomableGlobe>
        </ComposableMap>
      </div>
    )
  }
}

export default GlobeTest