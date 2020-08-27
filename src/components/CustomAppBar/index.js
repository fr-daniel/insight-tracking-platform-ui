import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';


import useStyles from './style';
import { openDrawer } from '../../store/actions/drawer';

const CustomAppBar = ({ title }) => {
  const classes = useStyles();
  const { open } = useSelector(state => state.drawer);
  const dispatch = useDispatch();

  const handleDrawerOpen = () => {
    dispatch(openDrawer());
  };


  return (
    <>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default CustomAppBar;



