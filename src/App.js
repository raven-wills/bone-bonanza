import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import BoneCard from "./components/BoneCard";
import bones from "./bones.json";

class App extends React.Component {
  state = {
    clicked: [],
    alert: ""
  };

  onBoneClick = id => {
    // Bone clicked that has already been clicked (loss)
    if (this.state.clicked.includes(id)) {
      this.setState({
        alert: "YOU HAVE POOR BONES",
        clicked: []
      });
      this.clearAlert();
    } else if (this.state.clicked.length + 1 === bones.length) {
      // this.state.clicked.length == bones.length (win)
      this.setState({
        alert: "YOU HAVE GOOD BONES",
        clicked: []
      });
      this.clearAlert();
    } else {
      // new bone clicked, haven't won yet
      this.setState({
        clicked: [...this.state.clicked, id],
        alert: ""
      });
    }
  };

  clearAlert = () => {
    setTimeout(() => {
      this.setState({
        alert: ""
      });
    }, 2250);
  };

  getShuffledBones = () => {
    return bones.sort(function() {
      return 0.5 - Math.random();
    });
  };

  render() {
    const shuffledBones = this.getShuffledBones();

    return (
      <Wrapper>
        <Title>Bones List</Title>
        {this.state.alert && <Title>{this.state.alert}</Title>}
        <div className="score">Score: {this.state.clicked.length}</div>
        {shuffledBones.map(({ id, name, image }) => (
          <BoneCard
            onBoneClick={this.onBoneClick}
            key={id}
            id={id}
            name={name}
            image={image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
