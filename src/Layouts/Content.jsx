import React from "react"
import { Switch, Route } from "react-router-dom"

import { Home, About, Pokemon } from "../pages"

const Content = () => {
    return <Switch>
        <Route path='/' exact >
            <Home />
        </Route>
        <Route path="/about" >
            <About />
        </Route>
        <Route path="/pokemon">
            <Pokemon />
        </Route>
    </Switch>
}

export default Content