import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
// import './Portfolio.css'
import './Services.css'

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Brow Mapping, Shape & Tint',
      author: '@bkristastucchio',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'hs_btw.png',
      title: 'Hybrid Set, Brow Tint & Wax',
      author: '@winksnink',
    },
    {
      img: 'vs.png',
      title: 'Volume Set',
      author: '@winksnink',
    },
    {
      img: 'cs_bl.png',
      title: 'Classic Set on Baby Lashes',
      author: '@winksnink',
      cols: 2,
    },
    {
      img: 'hs_bs.png',
      title: 'Hybrid Set & Brow Shaping',
      author: '@winksnink',
      cols: 2,
    },
    {
      img: 'cs_b.png',
      title: 'Classic Set with a Pop of Blue',
      author: '@winksnink',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'obt_1.png',
      title: 'Ombre Brow Tattoo I',
      author: '@winksnink',
    },
    {
      img: 'obt_2.png',
      title: 'Ombre Brow Tattoo II',
      author: '@winksnink',
    },
    // {
    //   img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    //   title: 'Lash Lift & Tint',
    //   author: '@silverdalex',
    //   rows: 2,
    //   cols: 2,
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    //   title: 'Short Volume Set',
    //   author: '@nolanissac',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    //   title: 'Volume Fill',
    //   author: '@helloimnik',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    //   title: 'Lash Lift & Tint',
    //   author: '@tjdragotta',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    //   title: 'Classic Set with D Curl',
    //   author: '@shelleypauls',
    // },
    
  ];

class Portfolio extends Component {
    render() {
        return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Services">Services</Nav.Link>
            <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <Nav.Link href="/Book">Book</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
   <h1>WINKS & INK</h1>
   <h3>Scroll through some of my work!</h3>
{/* 
function TitlebarImageList() { */}
{/* //   return ( */}
<div className='portfolioImageContainer'>
    <ImageList sx={{ width: 1500, height: 700 }}>
      <ImageListItem key="Subheader" cols={2}>
        {/* <ListSubheader component="div">December</ListSubheader> */}
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                {/* <InfoIcon /> */}
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
{/* //   );
} */}


</div>
</>
        )
    }
}
export default Portfolio;