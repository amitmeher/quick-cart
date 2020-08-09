import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import JavaScriptQuestions from '../../Store/data/initialStateData';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import styles from '../../Styles/Styles';
import { Notify } from '../../Util/NotificationProvider';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';

const ProductList = props => {
    const { classes } = props;
    const { products } = useSelector(state => state);
    console.log({ products });
    return (
        <Paper className={classes.drawerViewBody} elevation={10} style={{ height: 'calc(100vh - 80px)', overflow: "auto" }} >
            <Grid container spacing={4} style={{ width: 'auto', margin: 'auto' }}>
                {products?.map(
                    (question, idx) =>
                        <Grid item lg={3} md={4} sm={6} xs={12}>
                            <ProductCard product={question} />
                        </Grid>
                )}
            </Grid>
        </Paper>
    )
}

export default withStyles(styles)(ProductList);