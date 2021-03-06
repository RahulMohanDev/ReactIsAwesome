import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ThemeContext from "./theme-provider";
import NavElement from "./NavElement";
import img from "./cat.jpg";
import stupidRahulImage from "./stupidRahul.jpg";

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

// function ShoppingList({ list, onListChange }) {
//   return (
//     <div>
//       <ul>
//         {list.map((item) => {
//           return <li key={item}>{item}</li>;
//         })}
//       </ul>
//     </div>
//   );
// }

// function Cart() {
//   const [list, setList] = useState([50, 400]);
//   return (
//     <>
//       <ShoppingList list={list} onListChange={setList} />
//       <div>
//         Total Amount is :{" "}
//         {list.reduce((pre, current) => {
//           return pre + current;
//         }, 0)}
//       </div>
//       ;
//     </>
//   );
// }

// context with hooks

// ReactDOM.render(<Cart />, document.getElementById("root"));

// function Toolbar() {
//   const [theme, setTheme] = useState("light");
//   function handleThemeChange() {
//     setTheme((oldTheme) => {
//       if (oldTheme === "light") {
//         return "dark";
//       }
//       return "light";
//     });
//   }
//   return (
//     <ThemeContext.Provider value={theme}>
//       <NavElement />
//       <button onClick={handleThemeChange}>{theme}</button>
//     </ThemeContext.Provider>
//   );
// }

// ReactDOM.render(<Toolbar />, document.getElementById("root"));

// HOC (higherOrderComponent)

// function withMentalState(Component, defaultState) {
//   return () => {
//     // this is the repeated code
//     const [mentalState, setMetalState] = useState(defaultState);
//     return (
//       <Component mentalState={mentalState} setMetalState={setMetalState} />
//     );
//   };
// }

// function IamHip({ mentalState, setMetalState }) {
//   // const [mentalState, setMetalState] = useState(defaultState);
//   return <h1>I am hip and my mental state is {mentalState}</h1>;
// }

// function NormalHuman({ mentalState, setMetalState }) {
//   return (
//     <div>
//       I am {mentalState}
//       <button
//         onClick={() => {
//           setMetalState("happy");
//         }}
//       >
//         Be happy
//       </button>
//       <button
//         onClick={() => {
//           setMetalState("sad");
//         }}
//       >
//         Be sad because I don't have illegal shit
//       </button>
//     </div>
//   );
// }

// const IamHIPWithMentalState = withMentalState(IamHip, "Happy");
// const NormalHumanMentalState = withMentalState(NormalHuman, "ok");

// ReactDOM.render(
//   <div>
//     <IamHIPWithMentalState />
//     <NormalHumanMentalState />
//   </div>,
//   document.getElementById("root")
// );

// renderProps in class

// class Cat extends React.Component {
//   render() {
//     const mouse = this.props.mouse;
//     return (
//       <img
//         src={img}
//         style={{
//           position: "absolute",
//           left: mouse.x,
//           top: mouse.y,
//           width: "150px",
//         }}
//         alt="some cat images"
//       />
//     );
//   }
// }

// class StupidRahul extends React.Component {
//   render() {
//     const mouse = this.props.mouse;
//     return (
//       <img
//         src={stupidRahulImage}
//         style={{
//           position: "absolute",
//           left: mouse.x,
//           top: mouse.y,
//           width: "50px",
//         }}
//         alt="some cat images"
//       />
//     );
//   }
// }

// class Mouse extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleMouseMove = this.handleMouseMove.bind(this);
//     this.state = { x: 0, y: 0 };
//   }

//   handleMouseMove(event) {
//     this.setState({
//       x: event.clientX,
//       y: event.clientY,
//     });
//   }

//   render() {
//     return (
//       <div style={{ height: "100vh" }} onMouseMove={this.handleMouseMove}>
//         {/*
//           <StupidRahul mouse={this.state}>
//           <Cat mouse={this.state}
//         */}
//         {this.props.render(this.state)}
//       </div>
//     );
//   }
// }

// class MouseTracker extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Move the mouse around!</h1>
//         <Mouse render={(mouse) => <StupidRahul mouse={mouse} />} />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<MouseTracker />, document.getElementById("root"));

// function Cat({ mouse }) {
//   return (
//     <img
//       src={img}
//       style={{
//         position: "absolute",
//         left: mouse.x,
//         top: mouse.y,
//         width: "150px",
//       }}
//       alt="some cat images"
//     />
//   );
// }

// function StupidRahul({ mouse }) {
//   return (
//     <img
//       src={stupidRahulImage}
//       style={{
//         position: "absolute",
//         left: mouse.x,
//         top: mouse.y,
//         width: "50px",
//       }}
//       alt="some cat images"
//     />
//   );
// }

// function Mouse({ render }) {
//   const [mouse, setMouse] = useState({ x: 0, y: 0 });

//   function handleMouseMove(e) {
//     setMouse({
//       x: e.clientX,
//       y: e.clientY,
//     });
//   }

//   return (
//     <div style={{ height: "100vh" }} onMouseMove={handleMouseMove}>
//       {/*
//           <StupidRahul mouse={mouse}>
//           <Cat mouse={mose}
//         */}
//       {render(mouse)}
//     </div>
//   );
// }

// function MouseTracker() {
//   return (
//     <div>
//       <h1>Move the mouse around!</h1>
//       <Mouse render={(mouse) => <StupidRahul mouse={mouse} />} />
//     </div>
//   );
// }

// ReactDOM.render(<MouseTracker />, document.getElementById("root"));

// customHooks

function useMentalState(defaultState) {
  const [mentalState, setMentalState] = useState(defaultState);
  function handleMentalState(type) {
    if (type === 1) {
      setMentalState("happy");
    }
    if (type === 2) {
      setMentalState("sad and it is not a good feeling");
    }
    if (type === 3) {
      setMentalState("high");
    }
  }
  return [mentalState, handleMentalState];
}

function IamHip() {
  // const [mentalState, setMentalState] = useState(defaultState);
  // function handleMentalState(type) {
  //   if (type === 1) {
  //     setMentalState("happy");
  //   }
  //   if (type === 2) {
  //     setMentalState("sad and it is not a good feeling");
  //   }
  //   if (type === 3) {
  //     setMentalState("high");
  //   }
  // }
  const [mentalState, handleHipState] = useMentalState("happy");
  return (
    <div>
      <h1>I am hip and my mental state is {mentalState}</h1>
      <button
        onClick={() => {
          handleHipState(3);
        }}
      >
        Some illegal stuff
      </button>
    </div>
  );
}

function NormalHuman() {
  const [mentalState, handleMentalState] = useMentalState("ok");
  return (
    <div>
      I am {mentalState}
      <button
        onClick={() => {
          handleMentalState(1);
        }}
      >
        Be happy
      </button>
      <button
        onClick={() => {
          handleMentalState(2);
        }}
      >
        Be sad because I don't have illegal shit
      </button>
    </div>
  );
}

ReactDOM.render(
  <div>
    <IamHip />
    <NormalHuman />
  </div>,
  document.getElementById("root")
);
