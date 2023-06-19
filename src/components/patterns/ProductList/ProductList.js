import React from "react";

export const statusTypes = {
  loading: "loading",
  errored: "errored",
  loaded: "loaded",
};

export default function ProductList({ status }) {
  if (status === statusTypes.loading) {
    return <Loading />;
  }
  if (status === statusTypes.errored) {
    return <Error message="Failed to load data" />;
  }
  return; //standard output when data present
}

function Loading({ status }) {
  return <h2>Loading</h2>;
}

function Error({ status }) {
  return <div>Error</div>;
}
