import { useState, useEffect } from 'react'
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer"
import Popup from "./components/Popup/Popup";

function App() {

  const [timedPopup, setTimedPopup] = useState(false);


  useEffect(() => {
    console.log(localStorage.getItem("popupClosed"))
    if (localStorage.getItem("popupClosed") !== 'true') {

      setTimeout(() => {
        setTimedPopup(true);
      }, 10000);
    }

  }, []);

  const triggerPopup = value => {
    setTimedPopup(value)
    localStorage.setItem("popupClosed", true)
  }

  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
      <Popup trigger={timedPopup} setTrigger={triggerPopup} />
    </div>
  );
}

export default App;
