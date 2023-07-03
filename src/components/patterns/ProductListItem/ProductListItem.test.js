import ProductListItem from "./ProductListItem";
import React from "react";
import { render, fireEvent } from "@testing-library/react";

it("shows on sale label when isOnSale", () => {
  const { getByTest } = render(
    <ProductListItem name="Mocha" price={3.5} imageUrl="..." isOnSale />
  );
  expect(getByTest(`(On Sale)`)).toBeInTheDocument();
});

it("disables the button when disabled", () => {
  const { getByTest } = render(
    <ProductListItem name="Mocha" price={3.5} isSoldOut />
  );
  expect(getByTest("Sold Out")).toHaveAttribute("disabled");
});

it("calls callback when button Add to Cart pressed", () => {
  const onAddToCart = jest.fn();
  const { getByTest } = render(
    <ProductListItem name="Mocha" price={3.5} onAddToCart={={onAddToCart}} />
  );
  fireEvent.click(getByTest("Add to Cart"))
  expect(onAddToCart).toHaveBeenCalled();
});
