import React from 'react'
import {Switch,Route,BrowserRouter } from 'react-router-dom'

import Home from './pages/Home/Home'
import Country from './pages/Country/Country'

const Navigator =()=>(
<BrowserRouter>

            <Switch >
                {/* render all routes here */}
                <Route exact  path="/" component={Home}  />
                <Route  path="/country/:name" component={Country}/>

            </Switch >
</BrowserRouter>

    
)

export default Navigator;