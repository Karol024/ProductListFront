import {render} from 'react-dom';
import React from 'react';
import './index.css';



import {App} from "./App";
import {BrowserRouter} from "react-router-dom";


render(
  <>
   <BrowserRouter>
       <App/>
   </BrowserRouter>
</>,
document.getElementById('root'),
);


