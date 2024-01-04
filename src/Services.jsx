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
// import {Instagram} from '@styled-icons/boxicons-logos/Instagram'

export default class Services extends Component {
    render() {
        return(
            <div>
                  <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Services">Services</Nav.Link>
            <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <Nav.Link href="/Book">Book</Nav.Link>
            {/* <Instagram/> */}
          </Nav>
        </Container>
      </Navbar>

      <br />

<h1>Lash Services</h1>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Classic Lash Extensions Full Set <br/>
          ($25 Deposit Required Upon Booking for New Clients)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Classic - $110 | 120 minutes
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book</Button>
      </CardActions>
    </Card>

    <br/>

      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          One Week Classic Touch Up <br/>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $35 | 60 minutes
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book</Button>
      </CardActions>
    </Card>

    <br/>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />

      <br/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Classic Fill 2 Weeks
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $50 | 90 minutes
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book</Button>
      </CardActions>
    </Card>

    <br/>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Classic Fill 3 Weeks
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $60 | 90 minutes
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book</Button>
      </CardActions>
    </Card>

    <br/>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Hybrid Lash Extensions Full Set <br/>
          ($25 Deposit Required Upon Booking for New Clients)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Hybrid - $125 | 120 minutes
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book</Button>
      </CardActions>
    </Card>

    <br/>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          One Week Hybrid Touch Up <br/>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $40 | 60 minutes
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book</Button>
      </CardActions>
    </Card>

    <br/>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Hybrid Fill 2 Weeks <br/>
          (Fill for lash extensions - price increases per week since last fill/full set.  NO FILLS AFTER 4 WEEKS - new set is required)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $60 | 90 minutes
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book</Button>
      </CardActions>
    </Card>

<br/>

<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Hybrid Fill 3 Weeks <br/>
          (Fill for lash extensions - price increases per week since last fill/full set.  NO FILLS AFTER 4 WEEKS - new set is required)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $70 | 90 minutes
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book</Button>
      </CardActions>
    </Card>

    <br/>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Volume Lash Extensions Full Set <br/>
          ($25 Deposit Required Upon Booking for New Clients)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Hybrid - $150 | 150 minutes
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book</Button>
      </CardActions>
    </Card>

    <br/>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          One Week Volume Touch Up <br/>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $40 | 60 minutes
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book</Button>
      </CardActions>
    </Card>

    <br/>
    
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Volume Fill 2 Weeks <br/>
          (Fill for lash extensions - price increases per week since last fill/full set.  NO FILLS AFTER 4 WEEKS - new set is required)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $70 | 105 minutes
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book</Button>
      </CardActions>
    </Card>

      <br/>

      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Volume Fill 3 Weeks <br/>
          (Fill for lash extensions - price increases per week since last fill/full set.  NO FILLS AFTER 4 WEEKS - new set is required)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $80 | 90 minutes
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book</Button>
      </CardActions>
    </Card>

    <br/>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
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
    
    <br/>

<h1>Brow Services</h1>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Eyebrow Shaping with Tint <br/>
          ($5 Deposit Required Upon Booking for New Clients)
          Eyebrow waxing or tweezing with tint if desired.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Eyebrow Shaping $15 | 60 minutes
          Shaping and Tint $25 | 60 minutes
          Tint Only $15 | 60 minutes
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book</Button>
      </CardActions>
    </Card>

<br/>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Eyebrow Shaping (No Tint) 
          <br/>
          Eyebrow waxing or tweezing with tint if desired.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $15 | 30 minutes
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book</Button>
      </CardActions>
    </Card>

<br/>

<h1>Permanent Makeup</h1>
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Ombre/Powder Brow Tattoo
          ($50 Deposit Required Upon Booking)
          **CONSULTATION IS REQUIRED**
          This can be done virtually or in person.  Please reach out to Amanda for consultation.
          <br/>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $250+ | 240 minutes
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book</Button>
      </CardActions>
    </Card>

    <br/>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Annual Brow Touch Up/Color Boost
          Color touch up for previously shaded brows (permanent makeup)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $100+ | 180 minutes
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book</Button>
      </CardActions>
    </Card>

            </div>
        )
    }
}