import React from "react";
class Home extends React.Component {
  constructor() {
    super();
    this.perfil = null;
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentWillMount() {
    console.log("componentWillMount");
  }
  render() {
    console.log("Render");
    return (
      <div>
        <h1>El home</h1>
      </div>
    );
  }
}
export default Home;
