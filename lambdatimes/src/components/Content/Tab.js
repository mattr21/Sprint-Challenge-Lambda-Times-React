import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  // console.log(props, "Tab")
      
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

Tab.propTypes = {
  selectedTab: PropTypes.string,
  tab: PropTypes.string,
  changeSelected: PropTypes.func
}

export default Tab;
