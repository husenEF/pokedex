import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        width: "100%",
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));
const Spinner = ({ color }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CircularProgress color={color} />
        </div>
    );
}

Spinner.defaultProps = {
    color: 'primary'
}

export default Spinner