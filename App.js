import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent"},
    React.createElement("div", { id: "child1"},[
        React.createElement("h1", {}, "Hello React 👋"), 
        React.createElement("h2", {}, "Very Interesting while learning react")
    ])
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);