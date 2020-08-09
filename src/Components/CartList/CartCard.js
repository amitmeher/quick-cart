import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import Favorite from '@material-ui/icons/Favorite';
import Delete from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { increaseCartQuantity, decreaseCartQuantity, setWishlist, removeFromCart } from '../../Store/reducers/product';

const useStyles = makeStyles({
    root: {
        display: 'flex'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 230
    },
    content: {
        flex: '1 0 auto'
    },
    cover: {
        height: 150,
        width: 100
    }
});

const CartCard = (props) => {
    const { product } = props;
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card className={classes.root} draggable>
            <CardMedia
                className={classes.cover}
                image={product.image}
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography variant="subtitle2" noWrap={true}>
                        {product.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" noWrap={true}>
                        {product.description}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                        Price: ₹ {product.price * product.quantity}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Typography variant="caption" color="textSecondary">
                        Quantity:{product.quantity}
                    </Typography>
                    <IconButton size="small" onClick={() => dispatch(decreaseCartQuantity(product.id))} disabled={product.quantity === 1}>
                        <Remove />
                    </IconButton>
                    <IconButton size="small" onClick={() => dispatch(increaseCartQuantity(product.id))}>
                        <Add />
                    </IconButton>
                    <IconButton size="small" onClick={() => dispatch(setWishlist(product.id))} color={product.wishlisted ? 'secondary' : ''}>
                        <Favorite />
                    </IconButton>
                    <IconButton size="small" onClick={() => dispatch(removeFromCart(product.id))}>
                        <Delete />
                    </IconButton>
                </CardActions>
            </div>
        </Card>
    );
}

export default CartCard;