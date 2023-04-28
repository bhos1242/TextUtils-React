import React, { useState } from "react";
import "./App.css";
import TextForm from "./components/TextForm";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils-Dark Mode";
      setInterval(() => {
        document.title = "TextUtils is Amazing Mode";
      }, 2000);
      setInterval(() => {
        document.title = "Install TextUtils now";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("light mode has been enabled", "success");
      document.title = "TextUtils-Light Mode";
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText={"About"} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm showAlert={showAlert} heading="Enter the text to Change Case"/>
        <About />
      </div>
    </>
  );
}

export default App;
