import React from "react";
export const Todo = ({ concepts }) => {
  return (
    <ul id="concepts">
      {concepts &&
        concepts.map((item, index) => {
          return (
            <li className="concept" key={index}>
              <img src={item.image} alt={item.title} />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </li>
          );
        })}
    </ul>
  );
};
