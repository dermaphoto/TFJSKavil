import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        color: '#3F51B5',
        '& > * + *': {
        marginLeft: theme.spacing(2),
        },
        marginTop: '150px',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

const LoadingSpinner = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress color="inherit" size={props.size} thickness={props.thickness} />
        </div>
    );
}

export default LoadingSpinner;