import React, { useState } from "react"
import { Link, withRouter } from "react-router-dom";

import { AppBar, Toolbar, Typography, makeStyles, IconButton, SwipeableDrawer, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import { KeyboardBackspace, HomeOutlined, Person, Dialpad } from "@material-ui/icons"


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'transparent',
        boxShadow: 'none',
        color: 'inherit'
    },
    gutters: {
        padding: 0
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    list: {
        width: 250,
    }
}));


const TopHeader = (props) => {
    const classes = useStyles();
    const [isOpen, toogleOpen] = useState(false)
    // console.log("header", props);
    const { location, history } = props

    console.log({ h: props });
    return <>
        <AppBar position="static" className={classes.root}>
            <Toolbar className={classes.gutters}>
                {location.pathname !== '/' &&
                    <>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => history.goBack()}>
                            <KeyboardBackspace />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Pokedex
                        </Typography>
                    </>
                }
            </Toolbar>
        </AppBar>
        <SwipeableDrawer anchor="left" open={isOpen} onClose={() => toogleOpen(false)} onOpen={() => toogleOpen(true)}>
            <div className={classes.list}
                role="presentation"
                onClick={() => toogleOpen(false)}
                onKeyDown={() => toogleOpen(false)}
            >
                <List>
                    <Link to="/">
                        <ListItem>
                            <ListItemIcon >
                                <HomeOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Menu Name" />
                        </ListItem>
                    </Link>
                </List>
                <List>
                    <Link to="/about">
                        <ListItem>
                            <ListItemIcon>
                                <Person />
                            </ListItemIcon>
                            <ListItemText primary="About Us" />
                        </ListItem>
                    </Link>
                    <Link to="/pokemon">
                        <ListItem>
                            <ListItemIcon>
                                <Dialpad />
                            </ListItemIcon>
                            <ListItemText primary="Pokemon" />
                        </ListItem>
                    </Link>
                </List>
            </div>
        </SwipeableDrawer>
    </>
}

export default withRouter(TopHeader)