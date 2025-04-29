import ShoeBlock from "./components/ShoeBlock";
import EmptyShoeBlock from "./components/EmptyShoeBlock";
import React, { useState, useEffect } from "react";

function Items(props) {
  const [items, setItems] = React.useState([]);
  const [onPlus, setOnPlus] = React.useState([]);

  React.useEffect(() => {
    fetch("https://c4c51fed912c54ac.mokky.dev/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  });

  return (
    <div className="Items">
      <div className="ItemsList">
        <div className="ItemListsFinder">
          <h1>Все кроссовки</h1>
          <div className="inputDiv">
            <img className="inputImg" src="/imgs/lupa.svg"></img>
            <input className="input" placeholder=" Поиск:" />
          </div>
        </div>
        <div className="ItemsBlock">
          {items.map((obj) => (
            <ShoeBlock
              title={obj.title}
              price={obj.price}
              imgUrl={obj.imgUrl}
              onPlus={"/imgs/fav.svg"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Items;
