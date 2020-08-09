import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import styles from '../../Styles/Styles';
import { Notify } from '../../Util/NotificationProvider';
import CartCard from './CartCard';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, placeOrder } from '../../Store/reducers/product';

const CartList = props => {
    const { classes } = props;
    const { products } = useSelector(state => state);
    const dispatch = useDispatch();
    const cartedProducts = products?.filter(({ carted }) => carted);
    const itemCount = cartedProducts.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0);
    const totalPrice = cartedProducts.reduce((accumulator, currentValue) => accumulator + currentValue.quantity * currentValue.price, 0);

    const handleDrop = event => {
        const id = event.dataTransfer.getData("id");
        const carted = cartedProducts.find(product => product.id === +id);
        if (!carted) dispatch(addToCart(+id));
    }

    const handleSubmit = () => {

        Notify("Order Placed Successfully", "success")
    }
    return (
        <div
            onDragOver={event => event.preventDefault()}
            onDrop={event => handleDrop(event)}
        >
            <Paper className={classes.drawerViewBody} elevation={10} style={{ height: 'calc(100vh - 380px)', overflow: "auto" }}>
                <Grid container direction='column' >
                    <Grid style={{ color: '#FF6666' }}>
                        Cart {itemCount ? `(${itemCount} Items)` : ''}
                    </Grid>
                    <Grid style={{ height: 'calc(100vh - 438px)', overflow: "auto" }}>
                        <Grid container justify='center' alignItems='center' spacing={1} style={{ width: 'auto', margin: 'auto' }}>
                            {cartedProducts.map(product =>
                                <Grid item>
                                    <CartCard product={product} />
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                    <Grid>
                        <span style={{ color: '#FF6666', padding: 20 }}>
                            {totalPrice ? `Total: ₹ ${totalPrice}` : ''}
                        </span>
                        <Button
                            variant="contained"
                            style={{ backgroundColor: itemCount ? '#FF6666' : '', color: 'white', float: "right", padding: 5, marginTop: 2 }}
                            disabled={!itemCount}
                            onClick={() => dispatch(placeOrder())}
                        >
                            Place Order
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div >
    );
}

export default withStyles(styles)(CartList);