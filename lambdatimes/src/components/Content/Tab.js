import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  console.log(props, "Tab")

  // ********************** I THINK I'M DONE WITH THIS... **********************
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

      
  return (
    <div
      className={(props.tab === props.SelectedTab) ? 'tab active-tab' : 'tab'}
      onClick={(tab) => {props.changeSelected}}
    >
      <div>
        {props.tab.toUpperCase()}
      </div>
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  selectedTab: PropTypes.string,
  tab: PropTypes.string,
  changeSelected: PropTypes.func
}

export default Tab;
