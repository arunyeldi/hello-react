/*

<div id="parent">
    <div id="child">
        <h1>I'm an h1 tag</h1>
    </div>
</div>

*/


const parent = React.createElement(
    "div",
    { id: "parent"},
    [React.createElement("div", { id: "child1"},[
        React.createElement("h1", {}, "I'm an h1 tag"), 
        React.createElement("h2", {}, "I'm an h2 tag......")
    ]), React.createElement("div", { id: "child2"},[
        React.createElement("h1", {}, "I'm an h1 tag"), 
        React.createElement("h2", {}, "I'm an h2 tag")
    ])]
);

console.log(parent);

const toor = ReactDOM.createRoot(document.getElementById("root"));

toor.render(parent);