import React from 'react';
import loadingGif from '../../assets/Home/Loading/loading5.gif';
import "../Loading/InitialLoading.css"
const InitialLoading = () => {
  return (
    <div className="loading-container">
      <img src={loadingGif} alt="Loading..." className="loading-gif" />
    </div>
  );
};

export default InitialLoading;