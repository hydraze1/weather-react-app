import { useState, useEffect, useRef } from "react";
import "../../leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

function Map({ markers }) {
  const [currentMarkerIndex, setCurrentMarkerIndex] = useState(0);
  const mapRef = useRef(null); // Initialize mapRef

  useEffect(() => {
    if (mapRef.current) {
      const { lat, lon } = markers[currentMarkerIndex].coord;
      mapRef.current.setView([lat, lon], 13);
    }
  }, [currentMarkerIndex, markers]);
  

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
    iconSize: [38, 38]
  });

  return (
    <div className="map">
    <MapContainer center={[markers[0].coord.lat, markers[0].coord.lon]} zoom={9.5} ref={mapRef}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={[marker.coord.lat, marker.coord.lon]} icon={customIcon}>
          <Popup>{marker.coord.pop}</Popup>
        </Marker>
      ))}
    </MapContainer>
    </div>
  );
}

export default Map;
