import axios from "axios";
import React from "react";

function ShoeBlock(props) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = async () => {
    setIsAdded(!isAdded);

    try {
      const response = await axios.get(
        "https://c4c51fed912c54ac.mokky.dev/cart-items"
      );
      const cartItems = response.data;

      // Ищем, есть ли товар с таким id
      const existingItem = cartItems.find((item) => item.id === props.id);

      if (existingItem) {
        await axios.delete(
          `https://c4c51fed912c54ac.mokky.dev/cart-items/${props.id}`
        );
      } else {
        // Сначала создаём товар
        const createdProduct = await axios.post(
          "https://c4c51fed912c54ac.mokky.dev/cart-items",
          {
            id: props.id,
            title: props.title,
            img: props.imgUrl,
            price: props.price,
          }
        );

        // Сразу после этого — меняем его id на тот, который нам нужен
        await axios.patch(
          `https://c4c51fed912c54ac.mokky.dev/cart-items/${createdProduct.data.id}`,
          {
            id: props.id,
          }
        );
      }
    } catch (err) {
      console.log("Ошибка при добавлении товара:", err);
    }
  };

  return (
    <div className="ShoeBlock">
      <img className="ShoeOptions" src={props.imgUrl} alt=""></img>
      <div className="likeBorder">
        <img className="like" src="/imgs/like.png" alt=""></img>
      </div>
      <div className="description">
        <p className="shoeName">{props.title}</p>
        <div className="price">
          <div>
            <p className="ShoePrice">ЦЕНА: </p>
            <b>{props.price} руб.</b>
          </div>
          <div onClick={onClickPlus} className="PlusBorder">
            <img
              src={isAdded ? "/imgs/fav.svg" : "/imgs/plus.png"}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoeBlock;
