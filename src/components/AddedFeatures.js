import React from 'react';
import AddedFeature from './AddedFeature';

import { removeFeature } from "../actions/featureActions";
import { connect } from "react-redux";

const AddedFeatures = props => {

  const handleClick = feature => {
    props.removeFeature(feature);
  }

  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} handleClick={() => handleClick(item)}/>
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToStore = state => {
  return ({
    car: state.car
  })
}

export default connect(mapStateToStore, {removeFeature})(AddedFeatures);
