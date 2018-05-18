import React from "react";
import Loader from "../loader";
import htmlDecode from "../../helpers/html_decode";
import "./index.css";

export default props => {
  if (props.cities.length === 0) {
    return <Loader />;
  } else {
    return props.cities
      .filter(x =>
        x.name.toLocaleLowerCase().includes(props.query.toLocaleLowerCase())
      )
      .map(city => (
        <li key={city.key} onClick={() => props.selectCity(city)}>
          {city.name.charAt(0).toUpperCase() + city.name.slice(1)}
        </li>
      ));
  }
};
