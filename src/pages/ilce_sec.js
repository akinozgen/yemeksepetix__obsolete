import React from "react";
import { Redirect } from "react-router-dom";

import { Header, Footer } from "../components";
import RegionList from "../components/region_list";
import Hero from "../components/hero";
import getRegions from "../providers/get_regions";
import htmlDecode from "../helpers/html_decode";

export default class IlceSec extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCity: JSON.parse(localStorage.getItem("city")),
      selectedRegion: undefined,
      regions: [],
      query: ""
    };

    this.selectRegion = this.selectRegion.bind(this);
    this.getRegions = this.getRegions.bind(this);
    this.searchInputChanged = this.searchInputChanged.bind(this);

    this.getRegions();
  }

  selectRegion(region) {
    if (this.state.regions.indexOf(region) > -1) {
      localStorage.setItem("region", JSON.stringify(region));
      this.setState({ selectedRegion: region });
    }
  }

  async getRegions() {
    let regions = await getRegions(this.state.selectedCity);

    if (regions.length > 20) {
      regions = JSON.parse(htmlDecode(JSON.stringify(regions)));
    }

    regions.splice(0, 1);

    this.setState({ regions });
  }

  searchInputChanged(query) {
    this.setState({ query: query.currentTarget.value });
  }

  render() {
    if (this.state.selectedRegion !== undefined) {
      return <Redirect to="oneri" />;
    }

    return (
      <section>
        <div className="red-flat">
          <Header />
          <br />
        </div>

        <Hero>Yaşadığın semti seçerek devam et...</Hero>

        <section className="section">
          <div className="container-lrg">
            <ul className="cities">
              <li className="search">
                <input
                  type="text"
                  name="search"
                  value={this.state.query}
                  onInput={this.searchInputChanged}
                  placeholder="Ara.."
                />
              </li>
              <div className="cities-inner">
                <RegionList
                  regions={this.state.regions}
                  query={this.state.query}
                  selectRegion={this.selectRegion}
                />
              </div>
            </ul>
          </div>
        </section>

        <Footer />
      </section>
    );
  }
}
