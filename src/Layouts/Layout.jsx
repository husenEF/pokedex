import React from 'react'
import { BrowserRouter as Router, } from "react-router-dom"
import { Container, makeStyles, } from '@material-ui/core'

import TopHeader from "./Header"
import Footer from "./Footer"
import Content from './Content'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#F5F7F8',
    },
    container: {
        backgroundColor: '#fff',
        minHeight: '100%'
    }
}))

const Layout = ({ children }) => {
    const classes = useStyles()
    return <Container maxWidth="sm" className={classes.container}>
        <Router>
            <TopHeader />
            <section className={classes.root}>
                <Content />
                {children !== null && children}
            </section>
            <Footer />
        </Router>
    </Container>
}

Layout.defaultProps = {
    children: null
}

export default Layout