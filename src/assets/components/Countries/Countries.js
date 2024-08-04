import React, { Component } from "react";
import "./Countries.scss";
import CONFIG from "../../Config";

import countryCard from "../../views/countryCard/countryCard";

class Countries extends Component {
  constructor() {
    super();
    this.state = {
      allCountries: [],
      countryListError: false,
    };

    this._initCountries(this);
  }

  _initCountries(context) {
    fetch(CONFIG.api)
      .then((resp) => resp.json())
      .then(function (data) {
        context.setState((state) => ({ allCountries: data }));
      })
      .catch(function (error) {
        console.error(error);
        context.setState((state) => ({ countryListError: true }));
      });
  }

  render() {
    return (
      <section className="countries">
        {this.state.allCountries.map((country, index) => {
          return countryCard({
            imgSrc: country.flags.svg,
            name: country.name.common,
            population: country.population,
            buttonText: "View Details",
            callback: null,
          });
        })}
      </section>
    );
  }
}

export default Countries;
