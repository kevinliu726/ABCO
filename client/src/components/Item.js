import React from "react";

function Item({ source, name, pathName }) {
  return (
    <div className="item" onClick={() => (window.location = `/${source}/${pathName}`)}>
      <h1> {name} </h1>
    </div>
  );
}

export default Item;
