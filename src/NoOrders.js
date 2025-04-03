function NoOrders() {
    return(
        <div className="NoOrders">
            <div className="NoOrdersBlock">
                <img src="/imgs/smile.png"></img>
                <div className="TextBlock">
                    <div className="TextBlockText">
                        <h2>У вас нет заказов</h2>
                        <p>Вы нищеброд?</p> 
                        <p>                        
                        Оформите хотя бы один заказ.
                        </p>
                    </div>
                    <button>
                        <img src="/imgs/left-arrow.svg"></img>
                        Вернуться назад
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NoOrders