import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import { Container, } from '@material-ui/core'

import TopHeader from "./Header"
import Footer from "./Footer"
import Content from './Content'

const Layout = ({ children }) => {
    return <Router>
        <TopHeader />
        <Container>
            <Content />
        </Container>
        <Footer />
    </Router>
}

export default Layout