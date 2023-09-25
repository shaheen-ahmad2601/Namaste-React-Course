import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // this is how we fetch data in class components.
    this.state = {
      userInfo: {
        name: "abc",
        locatoin: "default",
        login:"xyz",
        avatar_url:"hello"
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/shaheen-ahmad2601");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }


// it will render after the complition of componentDidMount cycle is done.
  componentDidUpdate(){
    console.log("componentDidUpdate");
  }

  componentWillUnmount(){
    console.log("componentWillUnmount");
  }

  // increment() {
  //   this.setState({ count: this.state.count + 1 });
  // }
  render() {
    const {name,location,login,avatar_url} = this.state.userInfo;
    // const { name } = this.props; // we can destructure here
    // const { count } = this.state;
    return (
      <div className="user-card">
        {/* <h2>count: {count}</h2> */}
        {/* <button onClick={() => this.increment()}>count</button> */}
        {/* <h2>{name}</h2> */}
        <img src={avatar_url} alt="my name" style={{width:"200px"}} />
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>User Name: {login}</h2>
        <h2>contact: @Shaheen07</h2>
      </div>
    );
  }
}

export default UserClass;

//class UserClass extends React.Component - either this way or directly destruccture this
// like {Component} from React.

/*
contructor
Render
  html rendered with dummy data.
  componentDidMount rendered
     api call.
      this.setState   - state variable is updated.

      ----update cycle

      render (api new data)
      html loaded with new api data.
      componentDitupdates rendered
*/