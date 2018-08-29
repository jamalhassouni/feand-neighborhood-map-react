import React, { Component } from "react";
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Filter from './components/Filter/Filter';
import PlacesData from './utils/placesData.json';


import "./App.css";

class App extends Component {
  state = {
    places: [],
    showingPlaces: [],
    query: '',
    center: { lat: 33.6795758, lng:-7.4114479 },
    showInfoId: false,
    loaded: false,
    action: ''
  }
/**
  * @description Load initial data
  */
 componentDidMount() {
  this.setState({
    places: PlacesData,
    showingPlaces: PlacesData,
    loaded: true
  });
}
  /**
  * @description Toggle menu's filter open
  */
  navToggle = (e) => {
    e.preventDefault();
     let navToggle =  document.querySelector('.nav-toggle');
     let  sidebar =  document.querySelector('#sidebar');
      navToggle.classList.toggle('expanded');
      sidebar.classList.toggle('expanded');
  }
/**
  * @description Toggle maker's infowindow open
  * @param {string} id - The marker's place ID
  * @param {string} action - Type of action fired (open or close)
  */
 onToggleOpen = (id, action) => {
  this.setState({
    showInfoId: id,
    action
  });
}

/**
  * @description Filter places to show
  * @param {string} query - The search query
  */
 filterPlaces = (query) => {
  const { places } = this.state;
  let showingPlaces;

  // update query in state
  this.setState({
    query: query.trim()
  });

  // filter places to show based on query
  if (query) {
    const match = new RegExp(escapeRegExp(query), 'i');
    showingPlaces = places.filter(place => match.test(place.name));
  } else {
    showingPlaces = places;
  }

  // sort places to show by place name
  showingPlaces.sort(sortBy('name'));

  // update places to show in state
  this.setState({ showingPlaces });
}
  render() {
    return (
      <div className="app">
      <Navbar navToggle={this.navToggle} />
      <div className="content">
      {
            this.state.loaded &&
            <Filter
              data={this.state}
              onToggleOpen={this.onToggleOpen}
              filterPlaces={this.filterPlaces}
            />
          }

            </div>
        <Footer />
      </div>
    );
  }
}

export default App;
