import React from 'react';

const Tab = props => {
  // console.log(props, "Tab")
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  
      // if({props.tab} == {props.selectedTab}) {
      //   return className = 'tab active-tab'
      // } 
      // return className = 'tab'

      
  return (
    <div
      className={''}
      onClick={(tab) => {
        /* ******************* DONE ***********************
        Replace this dummy click handler function with your selectTabHandler function from props you'll need to pass the `tab` in as an argument to this handler. */
         {props.changeSelected}
      }}
    >
      <div>
        {props.tab.toUpperCase()}
      </div>
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
