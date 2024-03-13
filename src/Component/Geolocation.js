function Geolocation(){
    let location = []
    const gotLocation = (position) => {
        console.log('Latitude:', position.coords.latitude);
        console.log('Longitude:', position.coords.longitude);
        location = [position.coords.latitude,position.coords.longitude]

      };
  
      const failedToGetLocation = (error) => {
        console.error('Error getting location:', error.message);
      };
  
      navigator.geolocation.getCurrentPosition(gotLocation, failedToGetLocation);
    return location;
}

export default Geolocation;