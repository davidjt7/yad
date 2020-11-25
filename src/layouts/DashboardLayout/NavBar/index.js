import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles
} from '@material-ui/core';
import {
  Map as MapIcon,
  Home as HomeIcon,
  Lock as LockIcon,
  MapPin as MapPinIcon,
  Image as ImageIcon,
  User as UserIcon,
  Users as UsersIcon,
  Tag as TagIcon,
  Book as BookIcon,
  Info as InfoIcon,
  Database as DatabaseIcon,
  BarChart as BarChartIcon,
  BarChart2 as BarChart2Icon,
  Key as KeyIcon,
  BatteryCharging as BatteryChargingIcon
} from 'react-feather';
import NavItem from './NavItem';

const home = {
  href: '/app/dashboard',
  icon: HomeIcon,
  title: 'Dashboard'
};
const activity = [
  {
    href: '/app/auth',
    icon: LockIcon,
    title: 'Authorizations'
  },
  {
    href: '/app/csessions',
    icon: BatteryChargingIcon,
    title: 'Charging Sessions'
  },
];
const assets = [
  {
    href: '/app/cpoints',
    icon: MapIcon,
    title: 'Charge Points'
  },
  {
    href: '/app/czones',
    icon: MapPinIcon,
    title: 'Charging Zones'
  },
  {
    href: '/app/locations',
    icon: MapIcon,
    title: 'Locations'
  },
  {
    href: '/app/locimages',
    icon: ImageIcon,
    title: 'Location Images'
  },
];
const crm = [
  {
    href: '/app/customers',
    icon: UserIcon,
    title: 'Users'
  },
  {
    href: '/app/tags',
    icon: TagIcon,
    title: 'RFID Tags'
  },
];
const partners = [
  {
    href: '/app/partners',
    icon: UsersIcon,
    title: 'Partners'
  },
  {
    href: '/app/contracts',
    icon: BookIcon,
    title: 'Partner Contracts'
  },
];
const analytics = [
  {
    href: '/app/reports',
    icon: BarChartIcon,
    title: 'Reports'
  },
  {
    href: '/app/sigfox',
    icon: DatabaseIcon,
    title: 'SigFox Data'
  },
];
const configuration = [
  {
    href: '/app/admin',
    icon: InfoIcon,
    title: 'Admin Accounts'
  },
  {
    href: '/app/cdetail',
    icon: BarChart2Icon,
    title: 'Company Detail'
  },
  {
    href: '/app/changepass',
    icon: KeyIcon,
    title: 'Change Password'
  },
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256,
    backgroundColor: '#252d35',
  },
  desktopDrawer: {
    width: 220,
    height: '100%',
    backgroundColor: '#252d35',
  },
  menuHead: {
    paddingLeft: 10,
    color: '#708e95'
  }
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        p={2}
      />
      <Box p={2}>
        <NavItem
          href={home.href}
          key={home.title}
          title={home.title}
          icon={home.icon}
        />
      </Box>
      <Typography
        className={classes.menuHead}
        color="textPrimary"
        variant="h6"
      >
        ACTIVITY
      </Typography>
      <Divider />
      <Box p={2}>
        <List>
          {activity.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>

      <Typography
        className={classes.menuHead}
        color="textPrimary"
        variant="h6"
      >
        ASSETS
      </Typography>
      <Divider />
      <Box p={2}>
        <List>
          {assets.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>

      <Typography
        className={classes.menuHead}
        color="textPrimary"
        variant="h6"
      >
        CRM
      </Typography>
      <Divider />
      <Box p={2}>
        <List>
          {crm.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>

      <Typography
        className={classes.menuHead}
        color="textPrimary"
        variant="h6"
      >
        PARTNERS
      </Typography>
      <Divider />
      <Box p={2}>
        <List>
          {partners.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>

      <Typography
        className={classes.menuHead}
        color="textPrimary"
        variant="h6"
      >
        ANALYTICS
      </Typography>
      <Divider />
      <Box p={2}>
        <List>
          {analytics.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>

      <Typography
        className={classes.menuHead}
        color="textPrimary"
        variant="h6"
      >
        CONFIGURATION
      </Typography>
      <Divider />
      <Box p={2}>
        <List>
          {configuration.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default NavBar;
