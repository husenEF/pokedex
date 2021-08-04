import React from "react"
import { Switch, Route } from "react-router-dom"

import { Home, About } from "../pages"

const Content = () => {
    return <Switch>
        <Route path='/' exact >
            <Home />
        </Route>
        <Route path="/about" >
            <About />
        </Route>
    </Switch>
}

export default Content