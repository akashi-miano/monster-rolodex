import React, { Component } from "react";
import Card from "./Card/Card.componenet";

export class CardList extends Component {
  render() {
    const { monsters } = this.props;
    console.log("render");
    return (
      <section className="py-16">
        <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {monsters.map((item) => {
            return <Card monsters={item} />;
          })}
        </div>
      </section>
    );
  }
}

export default CardList;
