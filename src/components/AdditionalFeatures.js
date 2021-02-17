import React from 'react';
import AdditionalFeature from './AdditionalFeature';

import { addFeature } from "../actions/featureActions";
import { connect } from "react-redux";

const AdditionalFeatures = props => {

  const handleClick = feature => {
    props.addFeature(feature);
  }

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} handleClick={() => handleClick(item)}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToStore = state => {
  return({
    additionalFeatures: state.additionalFeatures
  })
}

export default connect(mapStateToStore, {addFeature})(AdditionalFeatures);
