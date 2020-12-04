import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';
const products = [
  {
    id: 1,
    name: 'shoes',
    description: 'running shoes.',
    price: '$5',
    image:
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/55d64ae6-806b-48f5-9f4c-46265717889a/chaussure-de-running-renew-run-pour-SPjMg8.jpg',
  },
  {
    id: 2,
    name: 'Macbook',
    description: 'Apple macbook.',
    price: '$10',
    image:
      'https://www.bhphotovideo.com/images/images2500x2500/apple_mgn63ll_a_13_3_macbook_air_with_1604825.jpg',
  },
];

const Products = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;

// )^*GWHIeh3ncoemcOjQbW#Uu

// Ftp-c@nnectes-moi7523h13
