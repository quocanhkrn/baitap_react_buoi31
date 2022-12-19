import React, { Component } from "react";
import "./style.css";
import Header from "./header";
import Glasses from "./glasses";

export default class GlassesTryOn extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <main className="container row gx-5 mx-auto">
          <Glasses />
        </main>
      </div>
    );
  }
}
