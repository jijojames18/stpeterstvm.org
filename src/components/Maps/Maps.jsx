import React, { createRef, useEffect } from 'react';

import './Maps.scss';

export default function Map() {
  const googleMapRef = createRef();

  useEffect(() => {
    if (!window.google || !window.google.maps) {
      const googleMapScript = document.createElement('script');
      googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
      window.document.body.appendChild(googleMapScript);

      googleMapScript.addEventListener('load', () => {
        const mapOptions = {
          zoom: 19,
          center: new window.google.maps.LatLng(8.4984851, 76.9505395),
        };
        new window.google.maps.Map(googleMapRef.current, mapOptions);
      });
    }
  }, [googleMapRef]);

  return (
    <div
      id="google-map-container"
      ref={googleMapRef}
      style={{ height: '320px' }}
    ></div>
  );
}
