import React from "react";
import Home from "./Merch";
import { useEffect, useState } from "react";
import { useParams } from "react-router"
import BandCard from "./BandCard";

function BandList({ setCurrentBandID }) {
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

export default BandList;