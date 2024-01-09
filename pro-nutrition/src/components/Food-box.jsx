import React,{useState} from 'react'


export default function Food(props) {
    let{ele,index}=props;
    let{img,name,cal}=ele;
    const[input,setInput]=useState(0);
    const[qunatity,setQuantity]=useState(0)
    function quantityhandler(){
        setQuantity(input)
    }
  return (
    <>
    <div className='Main'>
        <div  className='Main' id='M'>
        <div>       
            <img src={img} alt="item" />
        </div> 
        <div className='game'>
            <span className='name'>{name}</span>
            <span>{cal}</span>
        </div>
        <div className='input'>
            <input  type="number" onChange={(e)=>{setInput(e.target.value)}} placeholder='enter the number here' />
            <button className='bt' onClick={quantityhandler}>+</button>
        </div>
        </div>
            <p className='quantity'>{qunatity} {name}={cal*qunatity} calories</p>
            <button className='button' onClick={()=>{setInput(0);setQuantity(0)}}>Reset</button>
    </div>


    </>
  )
}
