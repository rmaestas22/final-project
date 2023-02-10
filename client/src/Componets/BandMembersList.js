import React from "react";

import { useEffect, useState } from "react";

import BandCard from "./BandCard";

function BandMembersList({ setCurrentBandID }) {
  const [band, setBands] = useState([]);

  useEffect(() => {
    fetch("/bands")
      .then((r) => r.json())
      .then(data => {
        console.log(data)
        setBands(data)
      });
  }, []);





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

export default BandMembersList;