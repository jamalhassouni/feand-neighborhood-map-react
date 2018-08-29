import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';
import MapStyles from '../../utils/mapStyles.json';
import './Map.css';

const Map = compose(withScriptjs, withGoogleMap)(props =>
  <GoogleMap
    defaultZoom={16}
    center={{ lat: 33.70359108788033, lng: -7.39924036134158 }}
    defaultOptions={{ styles: MapStyles }}
  >

  </GoogleMap>
);



export default Map;
