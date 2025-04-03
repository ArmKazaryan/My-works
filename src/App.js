import React from 'react';
import './index.scss';
import Header from './header';
import Banner from './banner';
import Rightpanel from './Right-panel';
import Items from './Items';
import EmptyRightPanel from './Empty-right-panel';
import MyPurchases  from "./MyPurchases";
import BookMarks from "./BookMarks";
import NoOrders from "./NoOrders";
import NoBookMarks from "./NoBookMarks";
import RightPanelOrder from "./RightPanelOrder"

function App() {
    return(
        <React.StrictMode>
            <Header/>
            {/* <Items/> */}
            {/* <EmptyRightPanel/> */}
            <Rightpanel/>
            {/* <MyPurchases/> */}
            {/* <BookMarks/> */}
            {/* <NoOrders/> */}
            {/* <NoBookMarks/> */}
            {/* <RightPanelOrder/> */}

        </React.StrictMode>
        
    
    )
    
}
export default App;