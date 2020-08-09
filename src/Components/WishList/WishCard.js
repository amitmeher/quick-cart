import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Store/reducers/product';

const useStyles = makeStyles({
    root: {
        width: 104,
    },
    media: {
        height: 165,
    },
    content: {
        padding: 1,
        height: 50
    }
});

const WishCard = props => {
    const { product } = props;
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={product.image}
            />
            <CardContent className={classes.content}>
                <Typography variant="subtitle2" color="textSecondary" noWrap={true}>
                    {product.title}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                    Price: ₹ {product.price}
                </Typography>
                <Button size="small" onClick={!product.carted ? () => dispatch(addToCart(product.id)) : () => { }} style={{ color: '#FF6666' }} >
                    Add to cart
                </Button>
            </CardContent>
        </Card>
    );
}

export default WishCard;