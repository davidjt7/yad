import React from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';

const Marker = ({ text }) => <div>{text}</div>;

const Map = (props) => {
  const { center, zoom } = props;
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        // bootstrapURLKeys={{ key: 'addKeyHere' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker lat={26.4499} lng={80.3319} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

Map.propTypes = {
  center: PropTypes.object.isRequired,
  zoom: PropTypes.number.isRequired,
};
Marker.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Map;
