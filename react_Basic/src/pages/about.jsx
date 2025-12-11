

// function About() {
//   return (
//     <>
//     {/* inline Style */}
//       <div style={{background: "red"}}>
//         <h1> About Us </h1>
//         <div>
//           <p style={{background: "blue"}}>
//             This is the about page of our React Basic Project.
//           </p>
//         </div>
//         {/* box model */}
//         {/* position */}
//         {/* static, relative, fixed, sticky, absolute */}
//         {/* difference  between static and relative*/}
        
//       </div>
//     </>
//   );
// }


import React from "react";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <div style={{ background: "white", height: "200vh" }}>
        <p style={{ background: "red", height: "100px", width: "100px" }}>
          child
        </p>
        <p
          style={{
            background: "red",
            height: "100px",
            width: "100px",
            display: "inline-block",
          }}
        >
          child
        </p>
        <span style={{ background: "red", height: "100px", width: "100px" }}>
          Inline
        </span>
        <span>Inline</span>
        <span>Inline</span>
        <span>Inline</span>
        <span>Inline</span>
        <div
          style={{
            height: "100px",
            width: "100px",
            border: "1px solid yellow",
          }}
        >
          {" "}
          div
        </div>
        <div
          style={{
            height: "100px",
            width: "100px",
            border: "1px solid yellow",
            margin: "10px",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          {" "}
          div
        </div>
        <div
          style={{
            height: "100px",
            width: "100px",
            border: "1px solid yellow",
          }}
        >
          {" "}
          div
        </div>
        <div
          style={{
            height: "100px",
            width: "100px",
            border: "1px solid yellow",
          }}
        >
          {" "}
          div
        </div>

        {/* box */}
        {/* position */}
        {/* static , relative , fixed , sticky , absolute*/}

        <div
          style={{
            height: "100px",
            width: "100px",
            border: "1px solid green",
            position: "relative",
            left: "50px",
            bottom: "200px",
          }}
        >
          {" "}
          div
        </div>
        <div
          style={{
            height: "100px",
            width: "100px",
            border: "1px solid yellow",
            margin: "10px",
            padding: "10px",
            borderRadius: "10px",
            position: "fixed",
            right: "100px ",
            bottom: "100px",
            zIndex: 100,
            background:'yellow'
          }}
        >
          {" "}
          div
        </div>

        {/* <div style={{ height: "300vh", border: "1px solid red" }}>
          <div
            style={{
              height: "100px",
              width: "100px",
              border: "1px solid red",
              margin: "10px",
              padding: "10px",
              borderRadius: "10px",
              position: "sticky",
              right: "100px ",
              top: "100px",
            }}
          >
            {" "}
            div
          </div>
        </div> */}
        {/* <div style={{ height: "300vh", border: "1px solid blue" }}>
          <div
            style={{
              height: "100px",
              width: "100px",
              border: "1px solid blue",
              margin: "10px",
              padding: "10px",
              borderRadius: "10px",
              position: "sticky",
              right: "100px ",
              top: "100px",
            }}
          >
            {" "}
            div
          </div> */}
        {/* </div> */}
      </div>

      <div  style={{border:'1px solid blue',height:'200px' ,position:'relative'}}>
        <div style={{height:'100px' , width:'100px' , position:'absolute',right:'10px',top:'20px',border:'1px solid blue' ,background:'red'}}>Absolute</div>
      </div>
    </div>
  );
};


export default About;