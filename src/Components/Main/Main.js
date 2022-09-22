import React from "react";
import Header from "./Restaurants/Header";
import RBItem from "./Restaurants/RestauranstsItems/RBItem";
import Restaurants from "./Restaurants/Restaurants";

export default function Main() {
  return (
    <>
      <Header />
      <div className="container">
        <Restaurants />
      </div>
      <RBItem
        city="Nagpur"
        RBimg="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        imgH='50'
        imgW='50'
      
      />
    </>
  );
}
