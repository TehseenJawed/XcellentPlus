import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
        fontSize:10,
        borderRadius:5,
        boxShadow:'0px 2px 5px #cfcfcf',
        marginTop:15
    },
}));

export default function TransitionsPopper(props) {
    const classes = useStyles();

    const { anchorEl, setAnchorEl } = props.states
    
    const open = Boolean(anchorEl);
    const id = open ? 'transitions-popper' : undefined;

    return (
        <div>
            <Popper id={id} open={open} anchorEl={anchorEl} transition>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <div className={classes.paper}>{props.text}</div>
                    </Fade>
                )}
            </Popper>
        </div>
    );
}
