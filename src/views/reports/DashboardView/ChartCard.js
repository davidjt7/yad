import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import {
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  Typography,
  colors,
  makeStyles,
  useTheme
} from '@material-ui/core';

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
  bodyMainText: {
    color: colors.blue[700]
  },
  bodySubText: {
    color: colors.grey[500],
    fontFamily: 'Segoe UI',
    padding: 3
  },
  chart: {
    paddingTop: 5,
    width: '40%'
  },
  list: {
    minWidth: 250,
    maxHeight: 100,
    overflow: 'auto'
  }
}));
const ChartCard = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const amounts = rest.amounts ? rest.amounts.map((item) => item.amount) : [];
  const labels = rest.amounts ? rest.amounts.map((item) => item.label) : [];
  const data = {
    datasets: [
      {
        data: amounts,
        backgroundColor: [
          colors.indigo[500],
          colors.red[600],
          colors.orange[600],
          colors.blue[600],
          colors.green[600]
        ],
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white
      }
    ],
    labels
  };

  let total = 0;
  if (amounts) {
    amounts.forEach((amount) => {
      total += amount;
    });
  }
  const options = {
    cutoutPercentage: 70,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: true,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.default,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Grid container justify="space-between">
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
          <Grid item>
            <Typography
              gutterBottom
              variant="h4"
              className={clsx(classes.bodySubText, className)}
            >
              {`(${total} Total)`}
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="space-between">
          <Grid item>
            <List
              className={clsx(classes.list, className)}
            >
              {rest.amounts
                ? rest.amounts.map((item) => (
                  <ListItem
                    gutterBottom
                    className={clsx(classes.bodySubText, className)}
                  >
                    {`${item.label} : ${item.amount}`}
                  </ListItem>
                ))
                : ''}
            </List>
          </Grid>
          <Grid item className={clsx(classes.chart, className)}>
            <Doughnut data={data} options={options} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

ChartCard.propTypes = {
  className: PropTypes.string
};

export default ChartCard;
