import React from "react";

export const ToDo = ({ title, onRemove }) => (
  <div>
    {title}
    <button onClick={onRemove}>X</button>
  </div>
);
