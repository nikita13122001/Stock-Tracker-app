import React,{Component} from "react";
import {iex} from '../config/iex.js'
const changeStyle = {
    color:'#4caf50',
    fontSize:'0.8rem',
    marginLeft:'0.5'
  
  }


class StockRow extends Component{
    constructor(props) {
        super(props)
        this.state={
            data:{}
          
    
        }
    }

    applyData(data){
       // console.log(data)
      //  this.setState({
        //    data:data
            
        //})
        const formattedPrice= (data.price == undefined) ?  null : data.price.tofixed(2)
        
        this.setState({
            price:formattedPrice,
            date:data.date,
            time:data.time
        })
           }

    componentDidMount(){
        const url = `${iex.base_url}/stock/${this.props.ticker}/intraday-prices?chartLast=1&token=${iex.api_token}`
        fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data)
            this.setState({
                data:data[data.length-1]
        
                
              })

        })
       
       
        
           
    
    }
     componentDidUpdate(){
        console.log(this.props.lastTradingDate)
     }


    render(){
        return (
        <li className='list-group-item'>
            <b>{this.props.ticker}</b> ${this.state.data.high}
            <span className='change' style={changeStyle}>
               +12.34 (5.3%)
              

            </span>
        </li>
        
        )

    }
}

export default StockRow;