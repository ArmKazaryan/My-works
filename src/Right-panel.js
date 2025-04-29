import { useEffect, useState } from "react";
import Card from "./components/Card";
import axios from "axios";

function Rightpanel(props) {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(
          "https://c4c51fed912c54ac.mokky.dev/cart-items"
        );
        setCartProducts(response.data);
      } catch (err) {
        console.error("Ошибка при получении товаров:", err);
      }
    };

    fetchCartItems();
  }, []);

  console.log(cartProducts);

  return (
    <div>
      <div onClick={props.onClose} className="Shadow"></div>
      <div className="Right-panel">
        <article>
          <div style={{ maxWidth: 385 }} className="Shoping-cart">
            <div className="Korzina">
              <p>Корзина</p>
              <img onClick={props.onClose} src="/imgs/krestik.png"></img>
            </div>
          </div>
          <div className="KorzinaCards">
            <div style={{ marginTop: "20px" }} className="cards-container">
              {cartProducts.map((obj, index) => (
                <Card
                  key={obj.id}
                  title={obj.title}
                  imgUrl={obj.img}
                  price={obj.price}
                />
              ))}
            </div>
          </div>
        </article>

        <div className="main-sum">
          <div className="Total-sum">
            <div className="Total">
              <p>Итого:</p>
              <div className="Total-line"></div>
              <p>21498 руб. </p>
            </div>
            <div className="Total">
              <p>Налог 5%:</p>
              <div className="Total-line"></div>
              <p>1074 руб. </p>
            </div>

            <button className="OrderButton">
              Оформить заказ
              <img src="/imgs/left-arrow.svg" alt="1"></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightpanel;
