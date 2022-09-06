
import {useQuery} from 'react-query';
import * as api from '../../api/allApi';
import React from "react";
import styled from 'styled-components';

const Button = styled.button`
padding:0.35em 1.2em;
border:0.1em solid #4d535e;
margin:0 0.3em 0.3em 0;
border-radius:0.12em;
box-sizing: border-box;
text-decoration:none;
font-family:Roboto sans-serif;
font-weight:300;
color:#FFFFFF;
transition: all 0.2s;
background-color:#4d535e;
}
&:hover{
color:#000000;
background-color:#FFFFFF;
}
@media all and (max-width:30em){

display:block;
margin:0.4em auto;
}`;

const UlStyled = styled.ul`
list-style-type:none;
text-align:start;
 `;

const ImgStyled =styled.img`
width:2%; 
`;


const MainPage =({setVideoId})=>{
   const{data, isLoading, isError} = useQuery('videos', api.getVideos);
    if(isLoading){
        return 'Keep waiting please, data is loading...';
     }
     if(isError){
         return 'Sorry...something went wrong';
     }
     



    return(
        <div>
            <ul style={{textAlign:'left', listStyleType:'none', marginLeft:'0px'}}>{data?.map((item) =>
            <li key={item.id} > 
            <ImgStyled alt='view' src='https://www.svgrepo.com/show/171895/eye.svg' />
            <Button className='button'  onClick={()=> setVideoId(item.id)}>{item.title}</Button> </li>)}</ul>
        </div>
    
    )
}

export default MainPage;