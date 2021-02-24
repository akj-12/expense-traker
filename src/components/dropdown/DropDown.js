import React, { useState, useEffect, useRef } from "react";

const DropDown = ({
  items,
  onChangeSelectedItem,
  selectedItem,
  selectedTitle,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }

      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const item = items.map((item) => {
    if (selectedItem === item.type) {
      return null;
    }

    return (
      <div
        className="item"
        // data-value={item}
        key={item.type}
        onClick={() => onChangeSelectedItem(item.type)}
      >
        {item.type}
      </div>
    );
  });

  return (
    <div className="ui form" ref={ref}>
      <div className="field">
        <label htmlFor="dropDown" className="label">
          {selectedTitle}
        </label>
        <div
          onClick={() => setOpen(!open)}
          className={` ui selection dropdown ${open ? "visible active" : ""} `}
        >
          <i className="dropdown icon "></i>
          <div className=" text">{selectedItem}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {item}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
