import React from "react";
import "./App.css";
import Profile from "./Profile/Profile";

function App() {
  var username = "John doe";

  function handleName() {
    alert("The profile user name is : " + username);
  }

  return (
    <div className="App">
      <Profile
        FullName={username}
        Bio="
I am learning how to code"
        Profession="Web developper"
        handleName={handleName}
      >
        <img
          src="/a picture.jpg"
          style={{ width: "25%", height: "50%", borderRadius: "17px" }}
          alt="profile pic"
        />
      </Profile>
    </div>
  );
}

export default App;
