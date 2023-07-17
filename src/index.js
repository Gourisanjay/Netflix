import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Sdata from "./Sdata";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <h1 className="heading_style">List of top  Netflix Series </h1>

{/* map and fat arrow function */}
  {Sdata.map((val, index) => {
    console.log(index);
    return(
    <App
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />

  );
} )}

  </>
);
