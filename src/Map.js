import React from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer,useMap } from "react-leaflet";
import { useEffect } from "react";
import { Polygon } from "react-leaflet";

const icon = L.icon({
  iconUrl: "./placeholder.png",
  iconSize: [38, 38],
});

const position = [51.505, -0.09];
function ResetCenterView(props) {
    const { selectPosition } = props;
    const map = useMap();
    useEffect(() => {

    if (selectPosition) {
        map.setView(
          L.latLng(selectPosition?.lat, selectPosition?.lon),
          map.getZoom(),
          {
            animate: true
          }
        )
    }
    },[selectPosition]);

    return null;

}

export default function Map(props) {
  const { selectPosition } = props;
  const locationSelection = [selectPosition?.lat, selectPosition?.lon];
  const hPolygon=[
    [
      [51.505, -0.09],
      [51.505, -0.09],
      [51.505, -0.09],
      

      
    ]
  ]

  return (
    <MapContainer
      center={position}
      zoom={9}
      style={{ width: "100%", height: "100%" }}
    >
     <Polygon strokeOpacity="5" color="red" positions={hPolygon}/>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=OWC2VnsaZ2lVMyTpEOID"
      />
      {selectPosition && (
        <Marker position={position} icon={icon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      )}
      <ResetCenterView selectPosition={selectPosition}/>
    </MapContainer>
  );
}
