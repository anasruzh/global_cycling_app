import React from 'react';
import {useQuery} from 'react-query';
import * as api from '../../api/allApi';
import styled from 'styled-components';

const StyledIframe = styled.iframe` width: 100%; height: 100%;`;
const StyledDiv= styled.div`
margin:10%;
`;
const InfoPage=({videoId})=>{

    const{data, isLoading} = useQuery(['videos', videoId], ()=>
    api.getVideoInfo(videoId),{
    enabled: Boolean(videoId)
})

    //no item selected
    if(!videoId)
    return 'Select video you want to watch'

    if (isLoading)
    return 'Keep waiting please, the data is loading'

    return(
    <StyledDiv>
        <h1>{data.title}</h1>
        <p>{data.publishDate}</p>
        <div> <StyledIframe width="560" height="315" src="https://www.youtube.com/embed/2rd9do-FY8M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></StyledIframe></div> 
        <p>{data.description}</p>
    </StyledDiv>)
}
export default InfoPage;