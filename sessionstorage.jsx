import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const App = () => {
  const [pagesRead, setPagesRead] = useState(0);

  const handlePageChange = () => {
    const pages = sessionStorage.getItem("pages");
    if (pages) {
      setPagesRead(parseInt(pages));
    }
    setPagesRead(pagesRead + 1);
    sessionStorage.setItem("pages", pagesRead + 1);
  };

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
};

export default App;
