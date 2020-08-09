import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styles from './Styles/Styles';
import { Notify } from './Util/NotificationProvider';
import { Navbar, ProductList, WishList, CartList } from './Components';

const Application = props => {
    const { classes } = props;

    return (
        <>
            <Grid container direction='row' justify='center' alignItems='center' >
                <Grid item md={12} sm={12} xs={12}>
                    <Navbar />
                </Grid>
            </Grid>
            <div className={classes.fullOuter}>
                <Grid container direction='row' spacing={1} >
                    <Grid item lg={9} md={9} sm={12} xs={12}>
                        <ProductList />
                    </Grid>
                    <Grid item lg={3} md={3} sm={12} xs={12}>
                        <WishList />
                        <CartList />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default withStyles(styles)(Application);