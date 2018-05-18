import React from "react";

export default class Hero extends React.Component {
  render() {
    return (
      <section className="section red-flat pd20">
        <div className="container mb20">
          <div className="col-12 text-center">
            <h3 className="heading-lrg primary-color launchaco-builder-hoverable">
              {this.props.children}
            </h3>
          </div>
        </div>
      </section>
    );
  }
}
