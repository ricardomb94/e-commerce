import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/media/logo.png';

import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles({});
  return (
    <>
      <AppBar position="fixed" className={classes.appear} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img
              src={logo}
              alt="Boutique"
              height="85px"
              className={classes.image}
            />
            Boutique
          </Typography>
          <div className={classes.grow} />
          <div className={classes.botton}>
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
