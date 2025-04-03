import Card from "./components/Card"

function Rightpanel () {
    return(
        <div>
            <div className="Shadow">
            </div>
            <div className="Right-panel">
           <article>
           <div style={{maxWidth: 385}} className="Shoping-cart">
                <div className="Korzina">
                    Корзина
                </div>
            </div> 
                <div className="KorzinaCards">
                 <div className="cards-container">
                   <Card />
                   <Card />
                   <Card />
                   <Card />
                   <Card />
                   <Card />
                   <Card />
                   <Card />

                 </div>

                    
                </div>
           </article>
            
          <div className="main-sum">
          <div className="Total-sum">
                <div className="Total">
                    <p>Итого:</p>
                    <div className="Total-line">
                            
                    </div>
                    <p>21498 руб. </p>
                </div>
                <div className="Total">
                    <p>Налог 5%:</p>
                    <div className="Total-line">
                            
                    </div>
                    <p>1074 руб.  </p>
                </div>
                
                <button  className="OrderButton">Оформить заказ 
                    <img src="/imgs/left-arrow.svg" alt="1"></img>
                    </button>
                    
            </div>
          </div>

        </div>
        </div>
    )
}

export default Rightpanel