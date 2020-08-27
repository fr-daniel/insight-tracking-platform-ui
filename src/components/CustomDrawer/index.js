import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { mainListItems } from './listItems';
import useStyles from './style';

import { closeDrawer } from '../../store/actions/drawer';

const CustomDrawer = () => {
  const classes = useStyles();
  const { open } = useSelector(state => state.drawer);
  const dispatch = useDispatch();

  const handleDrawerClose = () => {
    dispatch(closeDrawer())
  };

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>{mainListItems}</List>
    </Drawer>
  );
};

export default CustomDrawer;



