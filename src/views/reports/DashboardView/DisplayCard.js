import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Select,
  MenuItem,
  colors,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    borderRadius: 15,
  },
  title: {
    fontFamily: 'Segoe UI'
  },
  body: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  bodyMainText: {
    color: colors.blue[700],
  },
  bodySubText: {
    color: colors.grey[500],
    fontFamily: 'Segoe UI'
  }
}));

const DisplayCard = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
          spacing={3}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h4"
              className={clsx(classes.title, className)}
            >
              {rest.title}
            </Typography>
            <div
              className={clsx(classes.body, className)}
            >
              <Typography
                color="textPrimary"
                variant="h1"
                className={clsx(rest.blueMainText ? classes.bodyMainText : null, className)}
              >
                {rest.mainText}
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                className={clsx(classes.bodySubText, className)}
              >
                {rest.subText}
              </Typography>
            </div>
          </Grid>
          {rest.enableSelect
            ? (
              <Grid item>
                <Select labelId="label" id="select" value="mtd">
                  <MenuItem value="mtd">Month To Date</MenuItem>
                  <MenuItem value="qtd">Quarter To Date</MenuItem>
                  <MenuItem value="ytd">Year To Date</MenuItem>
                </Select>
              </Grid>
            ) : ''}
        </Grid>
      </CardContent>
    </Card>
  );
};

DisplayCard.propTypes = {
  className: PropTypes.string
};

export default DisplayCard;
