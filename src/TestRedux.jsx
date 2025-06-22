import React from "react";
import { useSelector } from "react-redux";

export default function TestRedux() {
  const state = useSelector((state) => state);
  console.log("🧪 TestRedux State:", state);

  return <h2>Check console for Redux state</h2>;
}
