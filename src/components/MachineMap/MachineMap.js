import React, { useState, useEffect } from 'react';
import './MachineMap.css';
import ReactMapGL, { Marker } from 'react-map-gl';

function MachineMap({ allMachines }) {
  const [viewPort, setViewPort] = useState({
    latitude: 48.095,
    longitude: 11.524,
    width: '100vw',
    height: '100vh',
    zoom: 10,
  });

  return (
    <div className="MachineMapdiv">
      <ReactMapGL
        {...viewPort}
        mapboxApiAccessToken={
          'pk.eyJ1IjoidG93ZW50IiwiYSI6ImNrYnZ6YnRrNjA1Zm4yeW80ZGh4cGxzb3IifQ.6fyOHGa4NVeMaT1c4oFWWw'
        }
        mapStyle="mapbox://styles/towent/ckbw2jjco0qa21io17k2sw58g"
        onViewportChange={(viewPort) => {
          setViewPort(viewPort);
        }}
      >
        {/* {allMachines.map((machine) => (
        
          <Marker
            key={machine.id}
            longitude={machine.latitude}
            latitude={machine.longitude}
            
          >
          
            <div><h1>Machine!</h1></div>
          </Marker> 
        
        ))} */}
      </ReactMapGL>
    </div>
  );
}

export default MachineMap;
