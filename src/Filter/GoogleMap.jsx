import { useState, useEffect } from 'react';

const GoogleMap = ({ selectedAttraction }) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (selectedAttraction) {
      setLocation({
        latitude: selectedAttraction.geocodes.main.latitude,
        longitude: selectedAttraction.geocodes.main.longitude,
      });
    }
  }, [selectedAttraction]);

  return (
    <div style={{ position: 'relative', height: '450px', width: '600px' }}>
      <iframe
        title="Attraction Location"
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        src={`https://maps.google.com/maps?q=${location?.latitude},${location?.longitude}&output=embed`}
      />
      {!location && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          padding: '10px',
          borderRadius: '5px',
        }}>
          Select an attraction to view on map
        </div>
      )}
    </div>
  );    
};

export default GoogleMap;
