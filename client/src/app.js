import React from 'react';
import ReactDOM from 'react-dom';
import FilmContainer from './containers/FilmContainer.jsx'


window.onload = function () {
  ReactDOM.render(
    <FilmContainer />,
    document.getElementById('app')
  );
};
