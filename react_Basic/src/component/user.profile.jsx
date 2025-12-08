import React from "react";

// ! UserProfile component with hardcoded user data

// export const UserProfile = () => {
//   const user = {
//     name: "John Doe",
//     email: "john@doe.com",
//   };
//   return (
//     <div className="user-profile">
//       <h2>{user.name}</h2>
//       <p>{user.email}</p>
//     </div>
//   );
// }

//! UserProfile component using props to display user data

// export const UserProfile = (props) => {
//   return (
//     <div className="user-profile">
//       <h2>{props.name}</h2>
//       <p>{props.email}</p>
//     </div>
//   );
// }

//! UserProfile component to display user information

export const UserProfile = ({ name, email, phone}) => {
  return (
    <div >
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
};
