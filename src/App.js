import React from "react";
import "./css/App/App.css";
import Lists from "./components/list";
import Header from "./components/header";
import AddContact from "./components/addContact";
import Tabs from "./components/tabs";

function App() {
  // const addDetailsHandler = (detail) => {
  //   console.log(detail);
  // }
  return (
    <div>
      <Header />
      {/* <AddContact addDetailsHandler={addDetailsHandler}/> */}
      {/* <Lists /> */}
      <Tabs/>
    </div>
  );
}
export default App;
