import React, { useState } from "react"
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, makeStyles, IconButton, SwipeableDrawer, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import { Menu as MenuIcon, HomeOutlined, Person } from "@material-ui/icons"


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
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


const TopHeader = () => {
    const classes = useStyles();
    const [isOpen, toogleOpen] = useState(false)

    return <>
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => toogleOpen(true)}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Pokedex
                </Typography>
                <Button color="inherit">Login</Button>
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
                </List>
            </div>
        </SwipeableDrawer>
    </>
}

export default TopHeader