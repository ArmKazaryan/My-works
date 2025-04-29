import React from "react";
import "./index.scss";
import Header from "./header";
import Banner from "./banner";
import Rightpanel from "./Right-panel";
import Items from "./Items";
import EmptyRightPanel from "./Empty-right-panel";
import MyPurchases from "./MyPurchases";
import BookMarks from "./BookMarks";
import NoOrders from "./NoOrders";
import NoBookMarks from "./NoBookMarks";
import RightPanelOrder from "./RightPanelOrder";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [clickCart, onClickCart] = React.useState(true);

  return (
    <React.StrictMode>
      <div className="background">
        <Header onClickCart={() => setCartOpened(true)} />
        {cartOpened && <Rightpanel onClose={() => setCartOpened(false)} />}
        <Items />
      </div>
    </React.StrictMode>
  );
}
export default App;
