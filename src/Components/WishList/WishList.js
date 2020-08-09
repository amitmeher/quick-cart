import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import styles from '../../Styles/Styles';
import WishCard from './WishCard';
import { useSelector, useDispatch } from 'react-redux';
import { setWishlist } from '../../Store/reducers/product';

const WishList = props => {
    const { classes } = props;
    const { products } = useSelector(state => state);
    const dispatch = useDispatch();
    const wishlistedProducts = products?.filter(({ wishlisted }) => wishlisted);

    const handleDrop = event => {
        const id = event.dataTransfer.getData("id");
        const wishlisted = wishlistedProducts.find(product => product.id === +id);
        if (!wishlisted) dispatch(setWishlist(+id));
    }

    return (
        <div
            onDragOver={event => event.preventDefault()}
            onDrop={event => handleDrop(event)}
        >
            <Paper className={classes.drawerViewBody} elevation={10} style={{ height: 285, overflow: "auto" }}>
                <Grid container direction='column'>
                    <Grid style={{ height: 20, color: '#FF6666' }}>
                        Wishlist {wishlistedProducts?.length ? `(${wishlistedProducts.length} Items)` : ''}
                    </Grid>
                    <Grid style={{ height: 250, overflow: "auto" }}>
                        <Grid container justify='center' alignItems='center' spacing={1} style={{ width: 'auto', margin: 'auto' }}>
                            {wishlistedProducts?.map(product =>
                                <Grid item>
                                    <WishCard product={product} />
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

export default withStyles(styles)(WishList);