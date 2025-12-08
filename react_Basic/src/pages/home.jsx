// import {useState} from "react";
import React from "react";
import { UserProfile } from "./component/user.profile.jsx";
import Child from "./component/child.jsx";

function Home() {
  const [show, setShow] = React.useState(true);
  return (
    <>
      <div>
        <h1>Hello World !</h1>
        <ul>
          <li>Component</li>
          <img src="/vite.svg" />
          <li>JSX</li>
          <li>Props</li>
          <li>Props Drilling</li>
          <li>SPA - Single Page Application</li>
          <li>DOM - Document Object Model</li>
          <br />
          <li>Virtual DOM</li>
          <li>Diffing</li>
          <li>Reconciliation</li>
          <br />
          <li>Hooks : useState(), useEffect()</li>
          <li>Component Lifecycle Methods</li>
          <li>
            1. componentDidMount() - runs once after initial rendering (creation
            phase)
          </li>
          <li>
            2. componentDidUpdate() - runs after every re-rendering (updating
            phase)
          </li>
          <li>
            3. componentWillUnmount() - runs before removing component from the
            DOM (unmounting phase)
          </li>
          <li> Conditional Rendering</li>
        </ul>

        {/* child a  -> child b  ..... z */}

        <button
          onClick={() => {
            {
              setShow((prev) => !prev);
            }
          }}
        >
          {" "}
          Toggle Child Component{" "}
        </button>

        {/* conditional rendering */}
        {/* {show ? <child/> : null} */}
        {/* short circuiting */}
        {show && <Child />}

        <Child />

        <UserProfile />

        {/* <UserProfile user={{name:'Alice', email:'Alice@gmail.com', phone:'1234543',}} /> */}
        {/* 
        <UserProfile name={"Jaman"} email={"jaman@react.com"} />
        <UserProfile name={"Fams"} email={"fams@react.com"} phone={12345688} /> */}
      </div>
    </>
  );
}

export default Home;

// json {"name":"val"}

// xml

// person
