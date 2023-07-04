# session_storage

import React, { useState } from "react";
import { Redirect } from "react-router-dom";

These lines import the necessary modules for the function.



const App = () => {
  const [pagesRead, setPagesRead] = useState(0);
  
This line defines a new component called App. It also uses the useState hook to create a new state variable called pagesRead, which is initialized to 0. The setPagesRead function is used to update the value of pagesRead.



const handlePageChange = () => {
  const pages = sessionStorage.getItem("pages");
  if (pages) {
    setPagesRead(parseInt(pages));
  }
  setPagesRead(pagesRead + 1);
  sessionStorage.setItem("pages", pagesRead + 1);
};

This function is called every time the user clicks the “Next Page” button. It first gets the current value of pages from the session storage object. If pages exists, it updates the value of pagesRead to match it. It then increments the value of pagesRead by 1 and stores it in the session storage object.




return (
  <div>
    {pagesRead >= 10 ? (
      <Redirect to="/login" />
    ) : (
      <div>
        <h1>My Website</h1>
        <button onClick={handlePageChange}>Next Page</button>
      </div>
    )}
  </div>
);

This code block returns the JSX that will be rendered on the page. If pagesRead is greater than or equal to 10, it redirects the user to the login page. Otherwise, it displays a heading and a button that calls the handlePageChange function when clicked.
