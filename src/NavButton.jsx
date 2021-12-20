import { useContext } from "react";
import ThemeContext from "./theme-provider";
export default function NavButton() {
  // go to the board in the school for 10 class and look for theme
  const value = useContext(ThemeContext);
  return <button>I am a {value} button</button>;
}
