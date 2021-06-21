import { useState } from "react";
import data from './data.js';
import Characters from "./Characters.js";
import {GridStyled} from "./styles";
//LIST
    const Grid = () => {
    const [_data, setData]= useState("");
    const [firstClick, setFirstClick] = useState();
    const checkData = (data) => {
        if (firstClick === null){setFirstClick(data);}
 
        // After the click if item ==item, flip = true, 2 containers them compare 
    // item.match()

        // if(firstClick === data.item){
        //     setFirstClick("");
        //     console.log('match');
        // }else{
        //     data.item96997010 = false
        //     firstClick.status = false;
        //     setFirstClick("");
        //     console.log('unmatched')
        // }
        
    };
    
    const dataList = data
    .sort(()=>0.5- Math.random())
    .map((data)=> 
    <Characters 
    data={data} 
    checkData={checkData}
    />)
 
   
    return(
        <GridStyled>{dataList}</GridStyled>
    );

    }
export default Grid;