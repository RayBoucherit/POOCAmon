import React from "react";
import { Card } from "../src/entities"

type MyComponentProps = {
  items: Card[];
}

const MyComponent: React.FC<MyComponentProps> = ({ items }) => {
  console.log("ICIIIIIII")
  console.log(items)
  return (
    <div>
      <h1>My Component</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}



export default MyComponent;
