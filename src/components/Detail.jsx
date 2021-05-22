import React, { useEffect, useState } from 'react'
import Styled from 'styled-components'
import { useParams } from 'react-router-dom'
import db from '../Firebase'
import movieSlice from '../features/movie/movieSlice'

const Detail = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState()

  useEffect(() => {
    // grab the movie info from DB
    db.collection('movies')
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          // save the movie date
          setMovie(doc.data())
        } else {
          //redirect the home page
        }
      })
  }, [])

  return (
    <Container>
      {movie && (
        <>
          <Background>
            <img src={movie.backgroundImg} />
          </Background>
          <ImageTitle>
            <img src={movie.titleImg} />
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
          <Subtitle>{movie.subTitle}</Subtitle>
          <Description>{movie.description}</Description>
        </>
      )}
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
