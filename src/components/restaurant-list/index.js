import React from "react";
import Loader from "../loader";
import "./index.css";

export default class RestaurantList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };

    this.onSearch = this.onSearch.bind(this);
    this.renderRestaurants = this.renderRestaurants.bind(this);
  }

  onSearch(x) {
    this.setState({ query: x.currentTarget.value });
    this.props.onInputChange(x.currentTarget.value);
  }

  renderRestaurants() {
    if (this.props.restaurants.length > 0) {
      return this.props.restaurants
        .filter(x =>
          x.displayname.toLowerCase().includes(this.state.query.toLowerCase())
        )
        .map(restaurant => (
          <li
            key={restaurant.seourl}
            title={restaurant.displayname}
            onClick={() => {
              this.setState({ query: restaurant.displayname });
              this.props.onRestaurantSelect(restaurant.displayname);
            }}
          >
            {restaurant.displayname}
          </li>
        ));
    } else {
      return <Loader />;
    }
  }

  render() {
    return (
      <ul className="restaurant-list">
        <div className="search">
          <input
            type="text"
            value={this.state.query}
            onInput={this.onSearch}
            placeholder="Restoran Ara..."
          />
        </div>
        <div className="list">{this.renderRestaurants()}</div>
      </ul>
    );
  }
}
