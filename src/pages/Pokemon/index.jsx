import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Card, Grid, Typography, CardContent, makeStyles, CardActions, Button, } from "@material-ui/core"
import { Pagination } from "@material-ui/lab"

import { getData } from "../../store/pokemon/actions"
import { Spinner } from "../../Components"

const useStyles = makeStyles((theme) => ({
    itemContainer: {
        // marginBottom: theme.spacing(1),
        // backgroundColor: 'red'
    },
    itemCard: {
        // margin: theme.spacing(1)
    }
}));


const Pokemon = () => {
    const classes = useStyles()
    const { data, pagination, error } = useSelector(state => state.pokemon)
    const dispatch = useDispatch()
    const [isLoading, setLoading] = useState(true)
    const fetchPokemon = () => { dispatch(getData()) }

    useEffect(() => {
        setLoading(true)
        fetchPokemon()
    }, [])


    useEffect(() => {
        if (data.length > 0)
            setLoading(false)
    }, [data])


    const renderList = () => {
        if (isLoading)
            return <Spinner />
        else {
            return <Grid container
                spacing={2}
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start">
                {data.map((e, i) => {
                    return <Grid item className={classes.itemContainer} sm={6} md={4} key={i} lg={3}>
                        <Card className={classes.itemCard}>
                            <CardContent>
                                <Typography variant="h4">{e.name}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => { }}>See Pokemon</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                })}
                <Grid item xs={12}>
                    <Pagination count={pagination.count / pagination.limit} />
                </Grid>
            </Grid>
        }
    }

    console.log({ pagination });
    return <>
        <h3>Pokemon List</h3>
        {renderList()}
    </>
}

export default Pokemon
