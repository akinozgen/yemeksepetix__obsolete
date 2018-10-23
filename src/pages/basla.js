import React from "react";
import { Redirect } from "react-router-dom";

import { Header, Footer } from "../components";
import getCities from "../providers/get_cities";
import Hero from "../components/hero";
import CityList from "../components/city_list";
import htmlDecode from "../helpers/html_decode";

export default class Basla extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      cities: [],
      selectedCity: undefined
    };

    this.searchInputChanged = this.searchInputChanged.bind(this);
    this.getCities = this.getCities.bind(this);
    this.selectCity = this.selectCity.bind(this);
    this.getCities();
  }

  async getCities() {
    try {
      let cities = await getCities();

      if (cities.length > 20) {
        cities = JSON.parse(htmlDecode(JSON.stringify(cities)));
      }

      this.setState({ cities });
    } catch (exception) {
      if (exception.message === "Failed to fetch") {
        alert(
          "Maalesef sunucumuz çöktü 😢 Meraklanmayın swat ekiplerimiz şu anda bu konuyla ilgileniyor. 10 dakikaya düzelmiş olur."
        );
        this.setState({ selectCity: undefined });
      }
    }
  }

  searchInputChanged(query) {
    this.setState({ query: query.currentTarget.value });
  }

  selectCity(city) {
    if (this.state.cities.indexOf(city) > -1) {
      localStorage.setItem("city", JSON.stringify(city));
      this.setState({ selectedCity: city });
    }
  }

  render() {
    if (this.state.selectedCity !== undefined) {
      return <Redirect to="ilce-sec" />;
    }

    return (
      <section>
        <div className="red-flat">
          <Header />
          <br />
        </div>

        <Hero>
          Yaşadığın şehri seçerek başlayabilirsin...
          <small>
            Bağlantı hızınıza bağlı olarak yükleme biraz zaman alabilir
          </small>
        </Hero>

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
                <CityList
                  cities={this.state.cities}
                  query={this.state.query}
                  selectCity={this.selectCity}
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
