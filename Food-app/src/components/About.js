import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h2>This is About Page</h2>
      <div>
        <User  name={"Name: Shaheen Ahmad functional"}/>
        <UserClass name={"shaheen ahmad class"}/>
      </div>
    </div>
  )
};

export default About;
