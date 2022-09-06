import axios from 'axios';
import { useState } from 'react';

const useGetData=()=>{ 
    const {state,setState}=useState();
     axios.create({
    method: "get",  
  })
  .then(res=>{
    const element= res.data.map(item=>[item.title, item.description])
    setState(element);
  })
  return (<ul>
    {state.data.map(function(element, index){
        return(
        <>
        <h1>{element.title}</h1>
        </>)
    })}
  </ul>);

    }  
export default useGetData;

