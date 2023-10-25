import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1> Error!!! </h1>
      <h2> Status : {err.status}</h2>

      <h3>{err.statusText}</h3>
    </div>
  );
};

export default Error;
