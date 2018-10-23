import React from "react";
import { Header, Footer } from "../components";
import { Redirect } from "react-router-dom";
import getRegions from "../providers/get_regions";
import htmlDecode from "../helpers/html_decode";

import Suggestions from "../components/suggestions";
import Slider from "../components/slider";
import RestaurantList from "../components/restaurant-list";
import Loader from "../components/loader";
import Hero from "../components/hero";
import getRestaurants from "../providers/get_restaurants";
import getMenus from "../providers/get_menus";
import "../styles/content-container.css";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";

export default class Oneri extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minDeliveryPrice: 15,
      restaurants: [],
      selectedCity: localStorage.getItem("city")
        ? JSON.parse(localStorage.getItem("city"))
        : undefined,
      selectedRegion: localStorage.getItem("region")
        ? JSON.parse(localStorage.getItem("region"))
        : undefined,
      selectedRestaurant: "",
      menus: [],
      maxPrice: 100,
      menuNodes: null,
      query: ""
    };

    this.getRestaurants = this.getRestaurants.bind(this);
    this.onRestaurantSelect = this.onRestaurantSelect.bind(this);
    this.onMinDeliveryPriceSet = this.onMinDeliveryPriceSet.bind(this);
    this.onQueryChanged = this.onQueryChanged.bind(this);
    this.onMaxPriceSet = this.onMaxPriceSet.bind(this);
    this.getMenus = this.getMenus.bind(this);
    this.renderSuggestions = this.renderSuggestions.bind(this);
    this.getRestaurants();
  }

  async getRestaurants() {
    try {
      const restaurants = await getRestaurants(
        this.state.selectedCity,
        this.state.selectedRegion
      );

      this.setState({
        restaurants: JSON.parse(htmlDecode(JSON.stringify(restaurants)))
      });
      this.getMenus();
    } catch (exception) {
      if (exception.message === "Failed to fetch") {
        this.setState({
          restaurants: "Failed to fetch"
        });
      }
    }
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  async getMenus() {
    this.state.restaurants.map(async r => {
      let menus = await getMenus(
        this.state.selectedCity,
        this.state.selectedRegion,
        r
      );
      if (menus.length > 0) {
        menus = menus.map(m => {
          m["restaurant"] = r;
          return JSON.parse(htmlDecode(JSON.stringify(m)));
        });
      }

      this.setState({
        menus: this.shuffle(this.state.menus.concat(menus))
      });
      this.renderSuggestions();
    });
  }

  onQueryChanged(x) {
    this.setState({ query: x.currentTarget.value });
    setTimeout(() => this.renderSuggestions(), 1000);
  }

  renderSuggestions() {
    if (this.state.menus.length > 0) {
      this.setState({
        menuNodes: (
          <Suggestions
            menus={this.shuffle(
              this.state.menus
                .filter(x => x.price <= this.state.maxPrice)
                .filter(
                  x =>
                    x.restaurant.minimumdeliveryprice <=
                    this.state.minDeliveryPrice
                )
                .filter(x =>
                  x.restaurant.displayname.includes(
                    this.state.selectedRestaurant
                  )
                )
                .filter(
                  x =>
                    x.name.includes(this.state.query) ||
                    x.description.includes(this.state.query)
                )
            ).slice(0, 10)}
          />
        )
      });
    } else {
      this.setState({ menuNodes: <Loader /> });
    }
  }

  onRestaurantSelect(restaurant) {
    this.setState({ selectedRestaurant: restaurant });
    setTimeout(() => this.renderSuggestions(), 1000);
  }

  onMinDeliveryPriceSet(x) {
    this.setState({ minDeliveryPrice: x });
    setTimeout(() => this.renderSuggestions(), 1000);
  }

  onMaxPriceSet(x) {
    this.setState({ maxPrice: x });
    setTimeout(() => this.renderSuggestions(), 1000);
  }

  render() {
    if (this.state.selectedCity === undefined) {
      return <Redirect to="/basla" />;
    }

    if (this.state.selectedRegion === undefined) {
      return <Redirect to="/ilce-sec" />;
    }

    return (
      <section>
        <div className="red-flat">
          <Header />
          <br />
        </div>

        <Hero>Ufaktan başlayalım...</Hero>

        <section className="section">
          <div className="container-lrg content-container">
            <div className="filters">
              <div className="shuffle">
                <h4>Beğenmedin Mi?</h4>
                <button
                  onClick={this.renderSuggestions}
                  className="button mobile-text-center mt10 launchaco-builder-hoverable mobile-text-center accent-bg primary-color"
                >
                  Tekrar Karıştır
                </button>
              </div>
              <h4>Restoran Seç</h4>
              <RestaurantList
                restaurants={this.state.restaurants}
                onRestaurantSelect={this.onRestaurantSelect}
                onInputChange={this.onRestaurantSelect}
              />
              <div className="slider">
                <h4>Kelime ile filtrele</h4>
                <input
                  type="text"
                  placeholder="Örn. Ayran"
                  defaultValue={this.state.query}
                  onInput={this.onQueryChanged}
                />
              </div>
              <div className="slider">
                <h4>Min. Paket Turarı</h4>
                <Slider
                  value={this.state.minDeliveryPrice}
                  onChange={this.onMinDeliveryPriceSet}
                />
              </div>
              <div className="slider">
                <h4>Maksimum Fiyat</h4>
                <Slider
                  value={this.state.maxPrice}
                  onChange={this.onMaxPriceSet}
                />
              </div>
            </div>

            <div className="menu-gallery">{this.state.menuNodes}</div>
          </div>
        </section>

        <Footer />
      </section>
    );
  }
}
