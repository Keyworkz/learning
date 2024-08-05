import React, { Component } from "react";
import "./Countries.scss";
import { _initCountries, loadMoreCountries } from "./CountriesUtils.js";

import countryCard from "../../views/countryCard/countryCard";

class Countries extends Component {
  loadMoreCountries = () => loadMoreCountries(this);

  constructor() {
    super();

    this.state = {
      allCountries: [],
      visibleCountries: [],
      countriesVisibleOnLoad: 6,
      countryListError: false,
    };

    _initCountries(this);
  }

  render() {
    return (
      <div className="countries__country-list">
        {this.state.visibleCountries.map((country, index) => {
          return (
            <React.Fragment key={index}>
              {countryCard({
                imgSrc: country.flags.svg,
                name: country.name.common,
                population: country.population,
                buttonText: "View Details",
                callback: null,
              })}
            </React.Fragment>
          );
        })}
        {this.state.allCountries.length >
          this.state.visibleCountries.length && (
          <button
            className="button button--primary button--load"
            onClick={this.loadMoreCountries}
          >
            Load all
          </button>
        )}
      </div>
    );
  }
}

export default Countries;
