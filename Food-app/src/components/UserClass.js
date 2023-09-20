import React from "react";


class UserClass extends React.Component {
    constructor(props){
        super(props);
        console.log(props.name);
    }
render() {
    return (
      <div className="user-card">
        <h2>{this.props.name}</h2>
        {/* <h2>Name: Shaheen Ahmad</h2> */}
        <h2>Location: Bnagalore</h2>
        <h2>contact: @Shaheen07</h2>
      </div>
    );
  }
}

export default UserClass;
