import React from "react";
import SearchBox from "./SearchBox";
import Map from "./Map";
import { useState } from "react";
import 'leaflet/dist/leaflet.css';


function App() {
  const [selectPosition, setselectPosition]= useState(null);

  // console.log(selectPosition);
  return (
    
     
    <div
      style={{
        border: "2px solid red",
        display: "flex",
        flexDirection: "row",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div style={{  width: "50vw", height:"100vh" }}>
        <Map selectPosition={selectPosition}>
        
       
        </Map>
        
       
      </div>
      <div style={{ width: "50vw" }}>
        <SearchBox  selectPosition={selectPosition} setselectPosition={setselectPosition}/>
      </div>
    </div>
  );
}

export default App;
