import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Favorite from '@material-ui/icons/Favorite';
import { useDispatch } from 'react-redux';
import { setWishlist, addToCart } from '../../Store/reducers/product';

const useStyles = makeStyles({
  root: {
    // width: 300,
  },
  media: {
    height: 300,
  },
  content: {
    padding: 5,
    height: 50
  },
  content: {
    padding: 2
  }
});

const ProductCard = props => {
  const { product } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleDrag = event => event.dataTransfer.setData('id', product.id);
  return (
    <Card className={classes.root} draggable onDragStart={handleDrag}>
      <CardMedia
        className={classes.media}
        image={product.image}
      />
      <CardContent className={classes.content}>
        <Typography variant="subtitle2" noWrap={true}>
          {product.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" noWrap={true}>
          {product.description}
        </Typography>
        <Typography variant="caption" color="textSecondary">
          Price: ₹ {product.price}
        </Typography>
      </CardContent>
      <CardActions className={classes.content}>
        <Button size="small" onClick={!product.carted ? () => dispatch(addToCart(product.id)) : () => { }} style={{ color: '#FF6666' }} >
          Add to cart
        </Button>
        <IconButton size="small" aria-label="add to favorites" onClick={() => dispatch(setWishlist(product.id))} color={product.wishlisted ? 'secondary' : ''}>
          <Favorite />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
