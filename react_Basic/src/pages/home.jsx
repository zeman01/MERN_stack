import React from "react";
import { useState } from "react";
import Child from "../components/child";
import { UserProfile } from "../components/user.profile";
import WrapperCard from "../components/wrapper";

const Home = () => {
  const [show, setShow] = useState(true);
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
          <li>Events</li>
          <li>click, change, hover, submit</li>
        </ul>
        <h2> Tags </h2>
        <ul>
          <li>Structure tags</li>
          <li>text</li>
          {/* h1-h6, p */}
          <li>Semantic Tags</li>
          {/* head, nav, main, aside, footer, section */}
          <li>Non Semantic Tags</li>
          {/* div, span */}
          <li>List</li>
          {/* ul, ol, li */}
          <li>Media Tags</li>
          {/* img, video, audio */}
          <li>Input Tags</li>
          {/* input, select, textarea, button */}

          <h2>Block, inline, inline-block</h2>
          <h3>Block</h3>
          <li>takes screen/ parent width</li>
          <li>can set height and width</li>
          <li>starts with new line</li>
          {/* div, h1-h6, p, ul, ol, li, section, header, footer */}

          <h3>Inline</h3>
          <li>takes only required width</li>
          <li>cannot set height and width</li>
          <li>does not start with new line</li>
          {/* span, a, img, input */}

          <h3>Inline-Block</h3>
          <li>takes only required width</li>
          <li>can set height and width</li>
          <li>does not start with new line</li>
          {/* button */}
        </ul>
        <h3>Wrapper component</h3>
        {/*  */}

        {/* child a  -> child b  ..... z */}

        <button
          onClick={() => {
            {
              setShow((prev) => !prev);
            }
          }}
        >
          {" "}
          Child Component{" "}
        </button>

        {/* conditional rendering */}
        {/* {show ? <child/> : null} */}
        {/* short circuiting */}
        {show && <Child />}

        <Child />

        <UserProfile />

        <WrapperCard>
          <h1>wrapper card</h1>
        </WrapperCard>

        <WrapperCard>
          <UserProfile
            user={{ name: "Bob", email: "bob@bob.com", phone: "9876543210" }}
          />
        </WrapperCard>

        {/* <UserProfile user={{name:'Alice', email:'Alice@gmail.com', phone:'1234543',}} /> */}
        {/* 
        <UserProfile name={"Jaman"} email={"jaman@react.com"} />
        <UserProfile name={"Fams"} email={"fams@react.com"} phone={12345688} /> 
        */}
      </div>
    </>
  );
};

export default Home;

// json {"name":"val"}

// xml

// person
