import styled from 'styled-components';
const ButtonStyled = styled.button`
display:inline-block;
padding:0.35em 1.2em;
border:0.1em solid #4d535e;
margin:0 0.3em 0.3em 0;
border-radius:0.12em;
box-sizing: border-box;
text-decoration:none;
font-family:Roboto sans-serif;
font-weight:300;
color:#FFFFFF;
text-align:center;
transition: all 0.2s;
background-color:#4d535e;
}
.hover{
color:#000000;
background-color:#FFFFFF;
}
@media all and (max-width:30em){

display:block;
margin:0.4em auto;
}`;
const Button=(props)=>{
    <ButtonStyled onClick={props.onClick}>{props.children}</ButtonStyled>
}
export default Button;