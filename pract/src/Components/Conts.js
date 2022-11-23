import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext();

function Conts() {
  const [user, setUser] = useState("hai");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
    return (
      <>
        <h1>For your Kind attention</h1>
       
      </>
    );
  }

export default Conts

