import React, { useState, useEffect } from "react";

const Child = () => {
  const [count, setCount] = useState(0);
  console.log("child changes");

  //* useEffect syntax
  // used for api call, side effects
  // useEffect(() => {
  // fetch
  // }, [dependencies]);
  // if no dependencies, runs every time component renders
  // empty dependencies means run once on mount
  // dependencies means run when dependencies change

  useEffect(() => {
    console.log("useEffect called");
  }, [count]); // runs when count changes

// componentDidMount
  useEffect(() => {
    console.log("Component Mounted");
  }, []); // empty dependencies means run once on mount

// componentDidUpdate
  useEffect(() => {
    console.log("Component Updated");
  }, [count]); // runs when count changes

// componentWillUnmount
  useEffect(() => {
    // cleanup code here
    // unmounting
    return () => {
      console.log("Component Unmounted");

    };
  }, []); // empty dependencies means run once on mount and cleanup on unmount

  return (
    <div>
      <p>count:{count} </p>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log(`  ${count}  `);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Child;
