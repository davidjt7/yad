import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import Map from '../../../components/Map';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    borderRadius: 15
  },
  title: {
    fontFamily: 'Segoe UI'
  },
  body: {
    paddingTop: 20,
    paddingBottom: 20
  },
  titleContainer: {
    paddingBottom: 10
  }
}));

const MapCard = ({ className, ...rest }) => {
  const classes = useStyles();
  const mapConfig = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Grid className={classes.titleContainer} container alignItems="center" justify="center" spacing={3}>
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h4"
              className={clsx(classes.title, className)}
            >
              {rest.title}
            </Typography>
          </Grid>
        </Grid>
        <Map center={mapConfig.center} zoom={mapConfig.zoom} />
      </CardContent>
    </Card>
  );
};

MapCard.propTypes = {
  className: PropTypes.string
};

export default MapCard;
