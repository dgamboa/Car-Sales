import React from 'react';

import { createStore } from "redux";
import { Provider } from "react-redux"; 

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import featureReducer from "./reducers/featureReducer";

const App = () => {
  const store = createStore(featureReducer);

  return (
    <Provider store={store}>
      <div className="boxes">
        <div className="box">
          <Header /> {/* previous props: car={state.car} */}
          <AddedFeatures /> {/* previous props: car={state.car} */}
        </div>
        <div className="box">
          <AdditionalFeatures /> {/* previous props: additionalFeatures={state.additionalFeatures} */}
          <Total /> {/* previous props: car={state.car} additionalPrice={state.additionalPrice} */}
        </div>
      </div>
    </Provider>
  );
};

export default App;
