import React from 'react'
import '../styles/App.css';
import {useSelector,useDispatch,Provider} from "react-redux";
import { onInputChange } from '../actions/index.js';
import store from '../store';

const App = () => {
const myState = useSelector((state)=>state.tellZodiac);
const dispatch =useDispatch();

  return (
    <Provider store={store}>
    <div id="main">
      
       <div>
       <h1>Get your Zodiac </h1>
        Enter Birthday month
        <input id='input' onChange={(e)=>dispatch(onInputChange(e.target.value))}  /><br/>
        Output Zodiac
        <input id='output' value={myState} />
       </div>

    </div>
    </Provider>
  )
}


export default App;
