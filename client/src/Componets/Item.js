import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

function Item({ setCurrentMerchID }) {
  const [item, setMerch] = useState([]);

  useEffect(() => {
    fetch("/items")
      .then((r) => r.json())
      .then(data => {
        console.log(data)
        setMerch(data)
      });
  }, []);

  return (
    <ul className="cards">
      {item?.map((item) => {
        return (
          <ItemCard
            key={item.id}
            item={item}
          />
        );
      })}
    </ul>
  )
}






export default Item