import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components'
// import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Services.css'
// import {Instagram} from '@styled-icons/boxicons-logos/Instagram'

export default class Services extends Component {
    render() {
        return(
          <div>
            <div className = 'navContainer'>
                  <Navbar bg="dark" data-bs-theme="dark">
                    <Container>
                      {/* <Navbar.Brand href="/">Home</Navbar.Brand> */}
                      <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/About">About</Nav.Link>
                        <Nav.Link href="/Services">Services</Nav.Link>
                        <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="/Contact">Contact</Nav.Link>
                        <Nav.Link href="/Book">Book</Nav.Link>
                        {/* <Instagram/> */}
                      </Nav>
                    </Container>
                  </Navbar>
            </div>

            <h1>Lash, Brow, and Permanent Makeup Services</h1>
            <h4>* Note on Fill for Lash Extensions:  Price increases per week since last fill/full set.  NO FILLS AFTER 4 WEEKS - new set is required. *</h4>

            <div class = 'cardContainer'>
              {/* CARD 1 */}
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image='lash_service.jpeg'
                  title='lash service'
              />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Classic Lash Extensions - Full Set
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    $110 | 120 minutes
                  </Typography>
                  <h6>$25 Deposit Required Upon Booking for New Clients</h6>
                </CardContent>
                <CardActions>
                  <Button size="small">Book</Button>
                </CardActions>
              </Card>
              {/* <br/> */}

              {/* CARD TWO */}
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image='lash_service.jpeg'
                  title="lash service"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Classic Touch Up - One Week
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    $35 | 60 minutes
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Book</Button>
                </CardActions>
              </Card>

              {/* CARD THREE */}
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image='lash_service.jpeg'
                  title='lash service'
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Classic Fill - Two Weeks*
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    $50 | 90 minutes
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Book</Button>
                </CardActions>
              </Card>

          {/* CARD FOUR */}
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image='lash_service.jpeg'
                  title="lash service"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Classic Fill - Three Weeks*
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    $60 | 90 minutes
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Book</Button>
                </CardActions>
              </Card>

          {/* CARD FIVE */}
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image='lash_service.jpeg'
                  title="lash service"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Hybrid Lash Extensions - Full Set
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Hybrid - $125 | 120 minutes
                  </Typography>
                  <h6>$25 Deposit Required Upon Booking for New Clients</h6>
                </CardContent>
                <CardActions>
                  <Button size="small">Book</Button>
                </CardActions>
              </Card>

          {/* CARD SIX */}
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image='lash_service.jpeg'
                  title='lash service'
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Hybrid Touch Up - One Week
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    $40 | 60 minutes
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Book</Button>
                </CardActions>
              </Card>

          {/* CARD SEVEN */}
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image='lash_service.jpeg'
                  title="lash service"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Hybrid Fill - Two Weeks*
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    $60 | 90 minutes
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Book</Button>
                </CardActions>
              </Card>

              {/* CARD EIGHT */}
              <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image='lash_service.jpeg'
                    title='lash service'
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Hybrid Fill - Three Weeks*
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      $70 | 90 minutes
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Book</Button>
                  </CardActions>
              </Card>

          {/* CARD NINE */}
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image='lash_service.jpeg'
                  title='lash service'
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Volume Lash Extensions - Full Set
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Hybrid - $150 | 150 minutes
                  </Typography>
                  <h6>$25 Deposit Required Upon Booking for New Clients</h6>
                </CardContent>
                <CardActions>
                  <Button size="small">Book</Button>
                </CardActions>
              </Card>

          {/* CARD TEN */}
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image='lash_service.jpeg'
                  title='lash service'
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Volume Touch Up - One Week 
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    $40 | 60 minutes
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Book</Button>
                </CardActions>
              </Card>
    
              {/* CARD ELEVEN */}
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image='lash_service.jpeg'
                  title='lash service'
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Volume Fill - Two Weeks*
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    $70 | 105 minutes
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Book</Button>
                </CardActions>
              </Card>

          {/* CARD 12 */}
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image='lash_service.jpeg'
                  title='lash service'
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Volume Fill - Three Weeks*
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    $80 | 90 minutes
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Book</Button>
                </CardActions>
              </Card>

          {/* CARD 13 */}
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image='lash_service.jpeg'
                  title='lash service'
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lash Removal
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    $10+ | 60 minutes
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Book</Button>
                </CardActions>
              </Card>

          {/* <h1>Brow Services</h1> */}
          {/* CARD 14 */}
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image='brow_service.jpeg'
                  title='brow service'
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Eyebrow Shaping with Tint
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Shaping and Tint $25 | 60 minutes
                  </Typography>
                  <h6>$5 Deposit Required Upon Booking for New Clients</h6>
                </CardContent>
                <CardActions>
                  <Button size="small">Book</Button>
                </CardActions>
              </Card>

              {/* CARD 15 */}
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image='brow_service.jpeg'
                  title='brow service'
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Eyebrow Tint - No Shaping
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Tint Only $15 | 60 minutes
                  </Typography>
                  <h6>$5 Deposit Required Upon Booking for New Clients</h6>
                </CardContent>
                <CardActions>
                  <Button size="small">Book</Button>
                </CardActions>
              </Card>

          {/* CARD 16 */}
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image='brow_service.jpeg'
                  title='brow service'
              />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Eyebrow Shaping - No Tint
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Shaping Only $15 | 30 minutes
                  </Typography>
                  <h6>$5 Deposit Required Upon Booking for New Clients</h6>
                </CardContent>
                <CardActions>
                  <Button size="small">Book</Button>
                </CardActions>
              </Card>

          {/* <h1>Permanent Makeup</h1> */}
              {/* CARD 17 */}
              <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image='permanent_makeup.png'
                    title='permanent makeup'
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Ombre/Powder Brow Tattoo
                    </Typography>
                    **CONSULTATION IS REQUIRED** <br/>
                    This can be done virtually or in person.  Please reach out to Amanda to schedule.
                    <Typography variant="body2" color="text.secondary">
                      $250+ | 240 minutes
                    </Typography>
                    <h6>$50 Deposit Required Upon Booking</h6>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Book</Button>
                  </CardActions>
              </Card>

          {/* CARD 18 */}
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image='permanent_makeup.png'
                  title='permanent makeup'
              />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Annual Brow Touch Up/Color Boost
                  </Typography>
                  For Previously Shaded Brows
                  <Typography variant="body2" color="text.secondary">
                    $100+ | 180 minutes
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Book</Button>
                </CardActions>
              </Card>
            </div>
          </div>
        )
    }
}