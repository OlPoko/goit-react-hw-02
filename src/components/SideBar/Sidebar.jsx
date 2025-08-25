import { useEffect } from "react";
import css from "./SiseBar.module.css";

export default function Sidebar({ onClose }) {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        console.log("listener for keypress", event.key);
        {
          onClose();
        }
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return function cleanUp() {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [onClose]);

  return (
    <div className={css.wrapper}>
      <button onClick={onClose}>Close</button>
      <h1>SideBar</h1>
      <p className={css.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti hic
        nemo cumque ex, illum tempore temporibus vel corrupti quod, nostrum
        similique a tenetur modi? Ut incidunt ipsum debitis tempora aliquid?
      </p>
    </div>
  );
}
