import React from 'react'



function Card({}) {
  return (
    <div className="Cards">
    <div className="CardsImg">
        <img src="/imgs/whiteandblacksmall.png"></img>
    </div>
    <div className='CardsDescription'>
       <p>Мужские Кроссовки Nike Air Max 270</p>
       <h4>12 999 руб.</h4>
    </div>
    <div>
        <div className="DeleteBorder">
          <img src="/imgs/plus.png"alt=""></img>
        </div>
    </div>
</div>
  )
}

export default Card