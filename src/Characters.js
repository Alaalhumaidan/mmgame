import {useState} from 'react';
import {CharactersStyled} from './styles';



const Characters = (props)=>{


   const [flipped, setFlipped] = useState(props.data.status);
   const [characterImage, setCharacterImage] = useState(props.data.backicon);
   const handleClick = () => {
       if (flipped === false) setCharacterImage(props.data.item)
       else setCharacterImage(props.data.backicon);
       setFlipped(!flipped)
       props.checkData(props.data.backicon);
    //    if (props.data.item === props.data.item){
    //     matched();
    //  }else{unmatched();};
    
    }
   
    return(
    
       <CharactersStyled onClick={handleClick} src={characterImage} alt={characterImage}/>
    );


};
   export default Characters;