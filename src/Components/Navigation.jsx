import { useState } from "react";

export function Navigation() {
  const [location, setLocation] = useState("Home");

  function handleButtonPress(event) {
    const buttonId = event.target.id;
    console.log(buttonId);
    setLocation(buttonId);
  }

  return (
    <div>
      <h1>{location}</h1>
      <div>
        <button id="Home" onClick={handleButtonPress}>
          Home
        </button>
        <button id="AboutUs" onClick={handleButtonPress}>
          About Us
        </button>
        <button id="Contact" onClick={handleButtonPress}>
          Contact
        </button>
      </div>
    </div>
  );
}
