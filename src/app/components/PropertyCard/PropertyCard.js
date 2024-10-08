"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import "@/app/globals.css";
import axios from "axios";
import { useAppContext } from "@/app/contexts/AppContexts";
import Link from "next/link";

const PropertyCard = ({ data, loading }) => {
  const { deptos, deptosLength, setDeptos } = useAppContext();

  const cartAdd = (e) => {
    e.preventDefault();

    const existingItem = deptos.find((depto) => depto.title === data.title);

    if (existingItem) {
      const updatedDeptos = deptos.map((depto) =>
        depto.title === data.title
          ? { ...depto, quantity: depto.quantity + 1 }
          : { ...depto }
      );
      setDeptos(updatedDeptos);
    } else {
      setDeptos([...deptos, { title: data.title, quantity: 1, data }]);
    }
  };

  return (
    <div>
      {!loading && <h2 >{data.title}</h2>}
      {loading && <h2 ></h2>}
      {!loading && <h2 >u$d {data.price}</h2>}
    </div>
  );
};

export default PropertyCard;