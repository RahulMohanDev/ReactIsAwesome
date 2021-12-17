import React from "react";

// export default function Hello(props) {
//   return <h1>Hi {props.name} my name is Robo</h1>;
// }

// export const NewHello = (props) => {
//   return <h1>Hi {props.name} this is new hello</h1>;
// };

export default class Hello extends React.Component {

  render() {
    return <h1>Hello as class, {this.props.name}</h1>;
  }
}
