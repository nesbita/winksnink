import React, { Component } from 'react'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Portfolio from './Portfolio'
import { Route, Routes } from 'react-router'
import Services from './Services'

class App extends Component {
    render() {
        // return <Home/>
        // function App() {
            return (
              <>
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/Contact' element={<Contact />} />
                    <Route path='/Portfolio' element={<Portfolio />} />
                    <Route path='/Services' element={<Services/>} />
                  </Routes>
              </>
            )
          }
} 

export default App;
    


// import { Landing } from './screens/Landing/Landing'
// import Signup from './Signup'
// import { Route, Routes } from 'react-router'
// import { Layout } from './layout/Layout'



