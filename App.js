//order of loading scripts matters a lot, first we should load the scripts and then we should write react code.
// when we refresh the page, we first see "not render" text and after few milli seconds and then react code overwrites because those react scripts takes some time to load, during that time, react not rendered.
const hd1 = React.createElement("h1",{
    id : "title",
},"header1");
const hd2 = React.createElement("h2",{
    id : "title",
},"header2");
const container = React.createElement("div",{
    id : "container",
},[hd1,hd2]);
//read documentation of react create element and paramaters it take
const root = ReactDOM.createRoot(document.getElementById("root"));
//passing the react element into root
//we can add react to a particular specific area. everythinh happens in root by react, react18 is latest version.
root.render(container);
//here we are passing hd3 into root, so if anything previously exists in root, will be overwritten by this.