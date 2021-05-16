import React from 'react'
import Styled from 'styled-components'

const Detail = () => {
  return (
    <Container>
      <Background>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" />
      </Background>
      <ImageTitle>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" />
      </ImageTitle>
      <Control>
        <PlayButton>
          <img src="/images/play-icon-black.png" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupButton>
          <img src="/images/group-icon.png" />
        </GroupButton>
      </Control>
      <Subtitle>this is the subtitle detail</Subtitle>
      <Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Description>
    </Container>
  )
}

export default Detail

const Container = Styled.div`
min-hight: calc(100vh -70px);
padding: 0 calc(3.5vw + 5px);
position:relative;
`
const Background = Styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
z-index:-1;
opacity:0.8;

img{
  width:100%;
  height:100%;
  object-fit:cover;
}
`
const ImageTitle = Styled.div`
min-height:170px;
height:30vh;
width:35vh;
min-width:200px;

img{
  height:100%;
  width:100%;
  object-fit:contain;
}

`
const Control = Styled.div`
display:flex;
align-items:center;
`

const PlayButton = Styled.button`
border-raidus:4px;
display:flex;
font-size:15px;
padding: 0px 24px;
margin-right:22px;
align-items:center;
background:rgb(249, 249,249);
height:56px;
border:none;
letter-spacing:1.8px;
cursor:pointer;

&:hover{
  background:rgb(198,198,198);
}

`

const TrailerButton = Styled(PlayButton)`
background:rgba(0, 0, 0, 0.3);
border: 1px solid rgb(249,249,249);
color:rgb(249, 249, 249);
text-transform:uppercase;
`

const AddButton = Styled.button`
height:44px;
width:44px;
display:flex;
align-items:center;
justify-content:center;
border:2px solid white;
margin-right:20px;
border-radius:50%;
background-color:rgba(0,0,0,0.6);
cursor:pointer;
span{
  font-size:30px;
  color:white;
}`

const GroupButton = Styled(AddButton)`
background-color:rgba(0,0,0,0.9);`

const Subtitle = Styled.div`
color:rgb(249,249,249);
font-size:15px;
min-height:25px;
margin-top:25px;
`

const Description = Styled.div`
line-height:1.5;
font-size:20px;
margin-top:15px;
color:rgb(249,249,249);
`
