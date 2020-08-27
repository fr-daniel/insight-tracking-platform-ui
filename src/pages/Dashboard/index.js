import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Routes from '../../routes';
import useStyles from './style';

import Copyright from '../../components/Copyright';
import CustomDrawer from '../../components/CustomDrawer';
import CustomAppBar from '../../components/CustomAppBar';


export default function Dashboard () {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BrowserRouter>
        <CustomAppBar title="Insight Tracking Platform" />
        <CustomDrawer />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Routes />
              </Grid>
            </Grid>
            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
        </main>
      </BrowserRouter>
    </div>
  );
}
