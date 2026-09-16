"use client";
import { useState, useEffect } from "react";

export default function RandomNumberApp() {
  const [number, setNumber] = useState<number | null>(null);

  useEffect(() => {
    setNumber(Math.random());
  }, []);

  return (
    <div>
      <h1>Random Number</h1>
      <p>{number ?? "Loading..."}</p>
    </div>
  );
}   
