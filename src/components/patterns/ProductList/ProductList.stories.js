import React from "react";
import ProductList from "./ProductList";
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";

export default { title: "ProductList" };

export const loading = () => <ProductList status={text("Status", "")} />;
