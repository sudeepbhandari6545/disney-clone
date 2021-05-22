import React from 'react'
import Styled from 'styled-components'

const Login = () => {
  return (
    <Container>
      <MyLogo>
        <LogoOne src="/images/cta-logo-one.svg" />
        <SignUp>Get all there</SignUp>
        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer.
        </Description>
        <LogoTwo src="/images/cta-logo-two.png" />
      </MyLogo>
    </Container>
  )
}

export default Login

const Container = Styled.div`
height:calc(100vh - 70px);
display:flex;
align-items:top;
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
    opacity:0.6;
    z-index:-1;
      

}
`
const MyLogo = Styled.div`
max-width:650px;
padding:80px 40px;
width:90%;
display:flex;
flex-direction:column;
margin-top:100px;
align-items:center;
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
transition: all 250ms;
letter-spacing:1.5px;
margin-top:10px;
margin-bottom:12px;


&:hover{
    background:#0483ee;
}
`
const Description = Styled.p`
font-size:12px;
text-align:center;
letter-spacing:1.5px;
line-height:1.5;

`
const LogoTwo = Styled.img`
width:90%;`

//test
