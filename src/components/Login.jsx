import React from 'react'
import Styled from 'styled-components'

const Login = () => {
  return (
    <Container>
      <MyLogo>
        <LogoOne src="/images/cta-logo-one.svg" />
        <SignUp>Get all there</SignUp>
      </MyLogo>
    </Container>
  )
}

export default Login

const Container = Styled.div`
height:calc(100vh - 70px);
display:flex;
align-items:center;
justify-content:center;

&:before{
    background-position:top;
    background-size:cover;
    background-repeat:no-repeat;
    background-image: url("/images/login-background.jpg");
    content: "";
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:-1;
      

}
`
const MyLogo = Styled.div`
max-width:650px;
padding:80px 40px;
width:80%;
display:flex;
flex-direction:column;
`
const LogoOne = Styled.img``

const SignUp = Styled.a`
width:100%;
background-color:#0063e5;
font-weigth:bold;
padding:17px 0px;
text-align:center;
border-radius:5px;
color:#f9f9f9;
text-transform:uppercase;
font-size:18px;
cursor:pointer;


`

//test
