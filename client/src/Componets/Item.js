import React from "react";
import ItemCard from "./ItemCard";
import { useEffect, useState } from "react";


function Item({onAddToCart}) {
  const [item, setItems] = useState([]);

  useEffect(() => {
    fetch("/items")
      .then((r) => r.json())
      .then(data => {
        console.log(data)
        setItems(data)
      });
  }, []);

  // if (!band){
  //   return( <div>
  //     <h2> Loading </h2>
  //   </div>
  //   )
  // }


  return (
    <ul className="cards">
      {item?.map((item) => {
        return (
          <ItemCard
            key={item.id}
            item={item}
            onAddToCart={onAddToCart}
          />
        );
      })}
    </ul>
  );
}

export default Item;