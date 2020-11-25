import React from 'react';
import clsx from 'clsx';
import {
  Container, Grid, Typography, makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import ChartCard from './ChartCard';
import DisplayCard from './DisplayCard';
import MapCard from './MapCard';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  headerSmall: {
    paddingLeft: 20,
    paddingBottom: 10,
    fontFamily: 'Segoe UI'
  },
  headerLarge: {
    paddingLeft: 20,
    paddingBottom: 20,
    fontFamily: 'Segoe UI'
  }
}));

const chargePointAmounts = [
  {
    amount: 14,
    label: 'Commercial Public'
  },
  {
    amount: 7,
    label: 'Commercial Private'
  },
  {
    amount: 1,
    label: 'Personal (home)'
  }
];

const cityAmounts = [
  {
    amount: 8,
    label: 'Bengaluru'
  },
  {
    amount: 5,
    label: 'Mumbai'
  },
  {
    amount: 3,
    label: 'Thane'
  },
  {
    amount: 1,
    label: 'Hyderabad'
  },
  {
    amount: 1,
    label: 'Ahmedabad'
  }
];

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Dashboard">
      <Typography
        className={clsx(classes.headerSmall)}
        color="textPrimary"
        variant="h6"
      >
        Home
      </Typography>
      <Typography
        className={clsx(classes.headerLarge)}
        color="textPrimary"
        variant="h1"
      >
        Dashboard
      </Typography>
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={4} sm={6} xl={4} xs={12}>
            <DisplayCard title="Faults & Connectivity loss" mainText="12" blueMainText="true" />
          </Grid>
          <Grid item lg={4} sm={6} xl={4} xs={12}>
            <DisplayCard title="Active Charging Sessions" mainText="9" blueMainText="true" subText="9.967 kWh" />
          </Grid>
          <Grid item lg={4} sm={6} xl={4} xs={12}>
            <DisplayCard title="Charging Sessions" mainText="232" subText="4.5% Increase" enableSelect="true" />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item lg={4} sm={6} xl={4} xs={12}>
            <DisplayCard title="Total Energy" mainText="460.426" subText="0.07% Decrease" enableSelect="true" />
          </Grid>
          <Grid item lg={4} sm={6} xl={4} xs={12}>
            <DisplayCard title="Total Revenue" mainText="0" subText="No Data" enableSelect="true" />
          </Grid>
          <Grid item lg={4} sm={6} xl={4} xs={12}>
            <DisplayCard title="New Users" mainText="7" subText="No prior data" enableSelect="true" />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item lg={4} sm={6} xl={4} xs={12}>
            <DisplayCard title="New Charge points" mainText="2" subText="50% Decrease" enableSelect="true" />
          </Grid>
          <Grid item lg={4} sm={6} xl={4} xs={12}>
            <ChartCard title="Charge points by type" amounts={chargePointAmounts} />
          </Grid>
          <Grid item lg={4} sm={6} xl={4} xs={12}>
            <ChartCard title="Locations by city" amounts={cityAmounts} />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item lg={12} sm={12} xl={12} xs={12}>
            <MapCard title="Locations" />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
