import React, { Component } from "react";
import StockRow from "./StockRow.js";

class StockList extends Component{
    constructor(props){
    super(props)
    this.setState={
        lastTradingDate:'20200413'


    }
    }

   
    render(){
        const lastTradingDate=this.setState.lastTradingDate;
        return (
            <ul className='list-group list-group-flush'>
            <StockRow ticker="aapl" lastTradingDate={lastTradingDate}/>
            <StockRow ticker="grub" lastTradingDate={lastTradingDate}/>
            <StockRow ticker="goog" lastTradingDate={lastTradingDate}/>
            <StockRow ticker="msft" lastTradingDate={lastTradingDate}/>
            <StockRow ticker="tsla" lastTradingDate={lastTradingDate}/>
            

          </ul>

        )
    }
}

export default StockList; 