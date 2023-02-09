import { useEffect, useState } from "react";
import MerchCard from "./MerchCard";

function MerchList({ setCurrentMerchID }) {
  const [merch, setMerch] = useState([]);

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
      {merch.map((merch) => {
        return (
          <MerchCard
            key={merch.id}
            merch={merch}
          />
        );
      })}
    </ul>
  )
}






export default MerchList