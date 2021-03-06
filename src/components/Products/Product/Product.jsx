import React from 'react';
import stripHtml from 'string-strip-html';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
// import ReactImageMagnify from 'react-image-magnify';
import useStyles from './styles';

const Product = ({ product }) => {
  const classes = useStyles();
  const { result } = stripHtml(product.description);

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.media.source}
        title={product.name}
      />
      <CardContent>
        <div className={classes.content}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
        </div>
        <div className={classes.price}>
          <Typography variant="h5">
            {product.price.formatted_with_symbol}
          </Typography>
          <hr />
        </div>

        <Typography
          // dangeroulySetInnerHTML={{ __html: product.description }}
          variant="body2"
          color="textSecondary">
          {result}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" />
        <AddShoppingCart />
      </CardActions>
    </Card>
  );
};

export default Product;
