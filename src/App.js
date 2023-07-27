import React from 'react';
//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'app.css'
//import StockRow from '../components/StockRow.js';
import StockList from './components/StockList.js';



function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='col-md-5 mt-5'>
          <div className='card'>
            <div className='card-body'>
              <StockList/>

            </div>

          </div>

        </div>
      </div>
      
    </div>
  );
}

export default App;
