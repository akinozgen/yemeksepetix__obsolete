import React from "react";
import Loader from "../loader";
import htmlDecode from "../../helpers/html_decode";
import "./index.css";

export default props => {
  if (props.regions.length === 0) {
    return <Loader />;
  } else {
    return props.regions
      .filter(x =>
        x.name.toLocaleLowerCase().includes(props.query.toLocaleLowerCase())
      )
      .map(region => (
        <li key={region.key} onClick={() => props.selectRegion(region)}>
          {region.name.charAt(0).toUpperCase() + region.name.slice(1)}
        </li>
      ));
  }
};
