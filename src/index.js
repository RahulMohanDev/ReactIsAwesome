import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// const Rahul = () => {
//   return <div>Rahul is the worst dev</div>;
// };

// const Components = () => {
//   return (
//     <div>
//       <Rahul />
//       <Rahul />
//       <Rahul />
//     </div>
//   );
// };

// ReactDOM.render(
//   // React.createElement("h1", null, "hello world"),
//   <div>Rahul is the worst dev</div>,
//   document.getElementById("root")
// );

// const user = "Rahul Mohan";
// const Hello = <h1>Hello, {user}</h1>;

// eslint-disable-next-line jsx-a11y/alt-text
// const element = <img className="className"></img>;

// ReactDOM.render(
//   <>
//     <SomeHello name="raul mohan" />
//     <NewHello name="kunal" />
//   </>,
//   document.getElementById("root")
// );

// clock example with us controlling when we re-render

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById("root"));
// }

// setInterval(tick, 1000);

// little better than old code but not the best

// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// function tick() {
//   ReactDOM.render(<Clock date={new Date()} />, document.getElementById("root"));
// }

// setInterval(tick, 1000);

// same as above but class based

// class Clock extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.props.date.toLocaleTimeString()}.</h2>//       </div>
//     );
//   }
// }

// lets introduce state

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
//   }

//   // i am born
//   componentDidMount() {
//     this.setInternalTimerId = setInterval(() => this.tick(), 1000);
//   }

//   // react killed me
//   componentWillUnmount() {
//     clearInterval(this.setInternalTimerId);
//   }

//   tick() {
//     this.setState({
//       date: new Date(),
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Clock />, document.getElementById("root"));

// rules for state

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date(), seconds: 0 };
//   }

//   // i am born
//   componentDidMount() {
//     this.setInternalTimerId = setInterval(() => this.tick(), 1000);
//   }

//   // react killed me
//   componentWillUnmount() {
//     clearInterval(this.setInternalTimerId);
//   }

//   tick() {
//     this.setState((state, props) => {
//       return {
//         date: new Date(),
//         seconds: state.seconds + 1,
//       };
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//         <h2>no of seconds from the beginning {this.state.seconds}</h2>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Clock />, document.getElementById("root"));

// // set state will merge with the old state
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date(), seconds: 0, user: "Rahul Mohan" };
//   }

//   // i am born
//   componentDidMount() {
//     this.setInternalTimerId = setInterval(this.tick.bind(this), 1000);
//   }

//   // react killed me
//   componentWillUnmount() {
//     clearInterval(this.setInternalTimerId);
//   }

//   tick() {
//     this.setState((state, props) => {
//       return {
//         date: new Date(),
//         seconds: state.seconds + 1,
//       };
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//         <h2>no of seconds from the beginning {this.state.seconds}</h2>
//         <h2>the user is {this.state.user}</h2>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Clock />, document.getElementById("root"));

// event handlers

// class Toggle extends React.Component {
//   constructor(props) {
//     // you have to write always.
//     super(props);
//     this.state = { isToggleOn: true };
//     // this line ?
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState((prevState) => ({
//       isToggleOn: !prevState.isToggleOn,
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>
//           {this.state.isToggleOn ? "ON" : "OFF"}
//         </button>
//         <button onClick={this.handleClick}>
//           {this.state.isToggleOn ? "ON" : "OFF"}
//         </button>
//         <button onClick={this.handleClick}>
//           {this.state.isToggleOn ? "ON" : "OFF"}
//         </button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Toggle />, document.getElementById("root"));

// how to solve the this issue

// class Toggle extends React.Component {
//   constructor(props) {
//     // you have to write always.
//     super(props);
//     this.state = { isToggleOn: true };
//     // this line ?
//     // this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState((prevState) => ({
//       isToggleOn: !prevState.isToggleOn,
//     }));
//   }

//   render() {
//     return (
//       <button
//         onClick={() => {
//           this.handleClick();
//         }}
//       >
//         {this.state.isToggleOn ? "ON" : "OFF"}
//       </button>
//     );
//   }
// }

// ReactDOM.render(<Toggle />, document.getElementById("root"));

// conditional rendering

// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// ReactDOM.render(
//   <Greeting isLoggedIn={true} />,
//   document.getElementById("root")
// );

// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

// function LoginButton(props) {
//   return <button onClick={props.onClick}>Login</button>;
// }

// function LogoutButton(props) {
//   return <button onClick={props.onClick}>Logout</button>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = { isLoggedIn: false };
//   }

//   handleLoginClick() {
//     this.setState({ isLoggedIn: true });
//   }

//   handleLogoutClick() {
//     this.setState({ isLoggedIn: false });
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
//     // if (isLoggedIn) {
//     //   button = <LogoutButton onClick={this.handleLogoutClick} />;
//     // } else {
//     //   button = <LoginButton onClick={this.handleLoginClick} />;
//     // }

//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {isLoggedIn ? (
//           <LogoutButton onClick={this.handleLogoutClick} />
//         ) : (
//           <LoginButton onClick={this.handleLoginClick} />
//         )}
//       </div>
//     );
//   }
// }

// ReactDOM.render(<LoginControl />, document.getElementById("root"));

// conditional rendering
// function Mailbox({ unreadMessages }) {
//   function RenderMessages() {
//     if (!unreadMessages) {
//       return <h2>There is some error</h2>;
//     }
//     if (!unreadMessages.length) {
//       return <h2>All your message are read</h2>;
//     }
//     return unreadMessages.map((message) => {
//       return <div>{message}</div>;
//     });
//   }
//   return (
//     <div>
//       <h1>Hello!</h1>
//       <RenderMessages />
//     </div>
//   );
// }

// const messages = ["hi rahul", "you are still the worst"];
// ReactDOM.render(<Mailbox />, document.getElementById("root"));

// form (Controlled form)
// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: "Rahul Is Stupid" };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   handleSubmit(event) {
//     // alert("A name was submitted: " + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={this.state.value}
//             onChange={this.handleChange}
//           />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// ReactDOM.render(<NameForm />, document.getElementById("root"));

// forms

// class NameForm extends React.Component {
//   render() {
//     return (
//       <form onSubmit={this.props.handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={this.props.name}
//             onChange={this.props.onChangeHandler}
//           />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// class DisplayUser extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { name: "Rahul" };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ name: event.target.value });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//   }
//   render() {
//     return (
//       <div>
//         <h1>the user Name is {this.state.name}</h1>
//        <NameForm
//           onChangeHandler={this.handleChange}
//           name={this.state.name}
//           onSubmit={this.handleSubmit}
//         />
//         <NameForm
//           onChangeHandler={this.handleChange}
//           name={this.state.name}
//           onSubmit={this.handleSubmit}
//         />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<DisplayUser />, document.getElementById("root"));

// why we should use hooks

// class Switch extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { switchState: true, name: "rahul" };
//     this.handleToggle = this.handleToggle.bind(this);
//   }

//   handleToggle() {
//     // when new state dons not depend on the old state
//     // this.setState({});
//     // when new state depends of old state
//     // this.setState((oldState)=>{})

//     // this.setState({switchState:!this.state.switchState})

//     this.setState((oldState) => {
//       return { switchState: !oldState.switchState };
//     });
//   }

//   render() {
//     return (
//       <div>
//         <div>{this.state.name}</div>
//         <button onClick={this.handleToggle}>
//           {this.state.switchState ? "On" : "Off"}
//         </button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Switch />, document.getElementById("root"));

// function Switch() {
//   const [switchState, setSwitchState] = useState({ name: "Rahul", bulb: true });
//   // const [name, setName] = useState("Rahul");

//   // const array = useState(true);
//   // const switchState = array[0];
//   // const setSwitchState = array[1];
//   return (
//     <div>
//       <div>{switchState.name}</div>
//       <button
//         onClick={() => {
//           setSwitchState((oldSwitchState) => {
//             return { ...oldSwitchState, bulb: !oldSwitchState.bulb };
//           });
//         }}
//       >
//         {switchState.bulb ? "ON" : "OFF"}
//       </button>
//     </div>
//   );
// }
// ReactDOM.render(<Switch />, document.getElementById("root"));


