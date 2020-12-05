import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Fish from "./Fish";
import CurrentFish from "./CurrentFish";
import { AppBar } from '@material-ui/core';
import ScrollArrow from './Scroll'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <ScrollArrow />
      <AppBar position="static">
        <Tabs 
        value={value} 
        onChange={handleChange}  
        centered>
          <Tab label="Current Fish" {...a11yProps(0)} />
          <Tab label="All Fish" {...a11yProps(1)} />
        </Tabs>
        </AppBar>
      <TabPanel value={value} index={0}>
        <CurrentFish />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Fish />  
      </TabPanel>

    </div>
  );
}

