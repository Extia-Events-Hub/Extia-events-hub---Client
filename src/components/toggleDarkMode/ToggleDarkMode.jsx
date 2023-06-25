import React, { useEffect } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useLocalStorage } from "../../hooks/useLocalStorage";

function ToggleDarkMode({ className }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorage();

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "winter" : "dark"
    );
  }, [isDarkMode]);

  return (
    <label className={"swap swap-rotate" + " " + className}>
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={(e) => setIsDarkMode(e.target.checked)}
      />

      <HiOutlineSun className=" swap-on fill-current w-10 h-10" />
      <HiOutlineMoon className=" swap-off fill-current w-10 h-10" />
    </label>
  );
}

export default ToggleDarkMode;
