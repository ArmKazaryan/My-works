import ShoeBlock from "./components/ShoeBlock";

function BookMarks() {
  return (
    <div className="MyPurchasesList">
      <div className="MyPurchases">
        <div className="BackFromPurchases">
          <img src="/imgs/back.png"></img>
        </div>
        <div>
          <h2>Мои закладки</h2>
        </div>
      </div>
      <div className="MyPurchasesBlock">
        <div className="PurchasedCards">
          <ShoeBlock />
        </div>
      </div>
    </div>
  );
}

export default BookMarks;
