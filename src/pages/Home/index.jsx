import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, ButtonGroup, Typography } from '@material-ui/core';

import { inc, dec } from "../../store/count/actions"

const Home = () => {
    const { count } = useSelector(state => state.count)
    const dispatch = useDispatch();
    console.log({ count });
    return (
        <>
            <Typography variant="h3">Count : {count}</Typography>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button onClick={() => dispatch(inc())}>
                    +
                </Button>
                <Button onClick={() => dispatch(dec())}>
                    -
                </Button>
            </ButtonGroup>
        </>
    )
}

export default Home