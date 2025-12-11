import React from "react";

const WrapperCard = ({ children }) => {
  return (
    <>
      <div
        style={{
          padding: "15px",
          border: "1px solid grey",
          background: "skyblue",
          borderRadius: "10px",
          maxWidth: "400px",
          boxShadow: "6px 2px 12px blue 6px 2px 12px ",
        }}
      >
        {/* children component wrapped in wrapper component */}
        {children}
      </div>
    </>
  );
};

export default WrapperCard;
