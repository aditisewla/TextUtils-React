import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';
// import { BrowserRouter as Router, 
//   Route, 
//   Routes 
// } from 'react-router-dom'; // Correctly import Routes and Route

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type.toLowerCase()
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "Success");
      document.title = "TextUtils - DarkMode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode has been disabled", "Success");
      document.title = "TextUtils - LightMode";
    }
  }; 

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" abt="AboutTextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter Your Text to Analyze" mode={mode} />
          {/* <Routes> */}
            {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Your Text to Analyze" mode={mode} />} /> */}
            {/* <Route exact path="/about" element={<About />} /> */}
            {/* Add more routes as needed */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
