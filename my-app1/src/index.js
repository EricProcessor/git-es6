import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
let arr = [1,2,3,4,5];
let newarr = arr.map((item,index,arr)=>{
    console.log(this,item,index,arr);
    return 1;
})
console.log(newarr);