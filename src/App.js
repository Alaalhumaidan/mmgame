
import './App.css';
import {Title, Guidelines, Logo} from "./styles";
import { useState } from 'react';
import Characters from './Characters';
import Grid from './Grid';


function App() {

  return (
  <div>
  <Title>MEMORY GAME!</Title>
     <Guidelines>Find the matching Cards</Guidelines> 
     <Logo
    alt = "game"
    src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTwtppBpWCB-5gmzxzYnSbpyS6AJ_kmKDFhw&usqp=CAU"     
     />
  

<Grid/>
         </div>
 
  );
}

export default App;
