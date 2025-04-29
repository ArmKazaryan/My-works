function Header(props) {
  return (
    <div className="wrapper">
      <header>
        <div className="wrap">
          <div>
            <div className="flex-container">
              <img src="/imgs/sneakers.svg"></img>

              <div>
                <h2 className="HeaderName">REACT SNEAKERS</h2>

                <p className="UnderHeaderName">Магазин лучших кроссовок</p>
              </div>
            </div>
            <div></div>
          </div>
          <div className="HeaderRight">
            <div onClick={props.onClickCart}>
              <img src="/imgs/shop.png"></img>
              <p>деньги</p>
            </div>
            <div>
              <img src="/imgs/like.png"></img>
              <p>Закладки</p>
            </div>
            <div>
              <img src="/imgs/profile.png"></img>
              <p>Профиль</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
