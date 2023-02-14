import React from "react";

import { useEffect, useState } from "react";

import BandCard from "./BandCard";
// removed prop from function { setCurrentBandID }
function Band() {
  const [band, setBands] = useState([]);

  useEffect(() => {
    fetch("/bands")
      .then((r) => r.json())
      .then(data => {
        console.log(data)
        setBands(data)
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
      {band.map((band) => {
        return (
          <BandCard
            key={band.id}
            band={band}
          />
        );
      })}
    </ul>
  );
}

export default Band;