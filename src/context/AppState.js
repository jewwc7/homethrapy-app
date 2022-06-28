import React, { useState, useReducer, useEffect } from "react";
import AppContext from "./appContext";
import data from "./data";

import { useMediaQuery, useTheme } from "@mui/material";

//State File. Import context File and Return ContextFile.Provider
//in value attribute pass any data you want to be accessed
//Don't forget to put/extropolate {props.children}
//this component will wrapped around the entire main app
//main app can access anything in the value by initializing myContext= useContext(MYcontext)
//very important! Have to intialize the context within child components. Not the main app, if I do the main app, intial value of context will be provided all the time
//review onenote for the above
const AppState = (props) => {
  const { massageArr, massageTypes } = data;

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("tablet"), {}); //xs, sm
  const tablet = useMediaQuery(theme.breakpoints.down("largeTablet"), {}); //md
  const largeTablet = useMediaQuery(theme.breakpoints.down("laptop"), {}); //md
  const laptop = useMediaQuery(theme.breakpoints.down("desktop"), {}); //large
  const desktop = useMediaQuery(theme.breakpoints.up("desktop"), {}); //xl

  const [modalVisible, setModalVisible] = useState(false);
  const [statusbar, setStatusbar] = useState({ offset: 1000, message: null }); //600 will ensure off the screen no matter the device
  const [scrolling, setScrolling] = useState(null);
  const [highlight, setHighlight] = useState({ value: null });

  const initialState = {
    //intial state object has to come before the usereducer or I will keep getting undefined
    currentUser: {}, //signed in user will go here
    massages: massageArr,
    selectedMassage: massageArr[2],
    practiceItem: null,
    category: null, //will get set once the indivdual item is set, used to filter photos for the might like portion
    statusbar,
    individualItem: {}, //will be set the currently showed item
    categories: [],
  };

  //const searchMatches = currentState.allProducts.filter(product => product.style.includes(text))

  const [currentState, dispatch] = useReducer(reducer, initialState); //initial state is an object in this case

  function reducer(currentState, action) {
    //console.log('I am the payload:' , action.payload)
    switch (action.type) {
      case "Select Massage": //Cannot use use State within the reducer. UseState value will not be updated due to async*review comments
        return currentState;

      default:
        return currentState;
    }
  }

  //add state for showing/hiding modal
  return (
    <AppContext.Provider
      value={{
        currentState, //passing the current state in as value.
        modalVisible,
        setModalVisible,
        dispatch,
        massageTypes,
        mobile,
        tablet,
        largeTablet,
        laptop,
        desktop,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;