import { useContext } from "react";
import ThemeContext from "./theme-provider";
import NavButton from "./NavButton";

export default function NavElement() {
  const value = useContext(ThemeContext);

  return (
    <div>
      this is a nav element and should be colored {value}
      <NavButton theme={value} />
    </div>
  );
}
