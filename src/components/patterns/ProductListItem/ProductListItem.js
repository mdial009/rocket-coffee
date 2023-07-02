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
    <Card highlight={isOnSale}>
      <Heading>
        {name} {isOnSale && "(On Sale)"}
      </Heading>
      <img src={imageUrl} alt=""></img>
      <Text>{price}</Text>
      <Button onClick={onAddToCart} disabled={isSoldOut}>
        {isSoldOut ? "Sold Out" : "Add To Cart"}
      </Button>
    </Card>
  );
}

function Heading({ children }) {
  return <h2>{children}</h2>;
}

function Card({ children, highlight }) {
  const cardClassName = highlight ? "card_sale" : "card";
  return <div className={cardClassName}>{children}</div>;
}

function Text({ children }) {
  return <span>{children}</span>;
}

function Button({ onClick, children }) {
  const cardClassName = "button-56 ";
  return (
    <button className={cardClassName} onClick={onClick}>
      {children}
    </button>
  );
}
