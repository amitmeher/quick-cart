import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import styles from '../../Styles/Styles';
import { Notify } from '../../Util/NotificationProvider';
import HomeIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';

const Navbar = props => {
    const { classes } = props;
    const handleSubmit = () => {
        Notify("Submitted Successfully", "success")
    }
    return (
        // <Paper className={classes.drawerViewBody} style={{ backgroundColor: '#575757' }} elevation={5}>
        <Grid item style={{ backgroundColor: '#FF6666' }}>
            <IconButton size="small" style={{ textTransform: "none", padding: 10 }}>
                <HomeIcon />
            </IconButton>
            <IconButton size="small" style={{ textTransform: "none", float: "right", padding: 10 }}>
                <AppsIcon />
            </IconButton>
        </Grid>
        // </Paper>
    )
}

export default withStyles(styles)(Navbar);