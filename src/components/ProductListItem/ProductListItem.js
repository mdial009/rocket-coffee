import React from "react";
import "./ProductListItem.css";

export default function ProductListItem({
  name,
  price,
  imageUrl,
  onAddToCart,
  isSoldOut,
  isOnSale,
}) {
  return (
    
    <div className={isOnSale ? "on-sale" : "card"}>
      <h2>
        {name}
        {isOnSale ? " (On Sale)" : ""}
      </h2>

      <img src={imageUrl} alt="" />

      <small>{price}</small>

      <button onClick={onAddToCart} disabled={isSoldOut}>
        {isSoldOut ? "Sold out" : "Add to Cart"}
      </button>
    </div>
  );
}

function Heading({ children }) {
  return <h2>{children}</h2>;
}

function Card({ children, highlight }) {
  const cardClassName = highlight ? "card sale" : "card";
  return <div className={cardClassName}>{children}</div>;
}

function Text({ children }) {
  return <span>{children}</span>;
}

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
