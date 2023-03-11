import React, { useState } from "react";

function TodoItem(props) {
  const [click, setClick] = useState(false);

  function handleClick() {
    // setClick((prevState) => {
    //   return !prevState;
    // });
    // console.log("keu", props.id);
    props.deleteItem(props.id);
  }

  return (
    <li
      // style={{ textDecoration: click ? "line-through" : "none" }}
      value={props.e}
      onClick={handleClick}
    >
      {props.e}
    </li>
  );
}

export default TodoItem;
