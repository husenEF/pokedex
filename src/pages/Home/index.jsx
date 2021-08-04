import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, ButtonGroup, Grid, Typography, makeStyles } from '@material-ui/core';

import { inc, dec } from "../../store/count/actions"

const useStyles = makeStyles((theme) => ({
    item: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        textAlign: 'center'
    }
}));

const Home = () => {
    const { count } = useSelector(state => state.count)
    const dispatch = useDispatch();
    const classes = useStyles()
    console.log({ count });
    return (
        <Grid container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
        >
            <Grid item xs className={classes.item}>
                <Typography variant="h3">Count : {count}</Typography>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button onClick={() => dispatch(inc())}>
                        +
                    </Button>
                    <Button onClick={() => dispatch(dec())}>
                        -
                    </Button>
                </ButtonGroup>
            </Grid>
        </Grid>
    )
}

export default Home