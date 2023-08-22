import React from "react";
import { Button } from "@mui/material";

import { Loading } from "../../../commons/loading";
import { Error } from "../../../commons/error";
import { TableComponent } from "./table";
import { ApiResponse } from "./model";

export const List: React.FC<ApiResponse> = ({
  data,
  loading,
  error,
  setError,
}) => {
  function handleAgain() {
    setError(null);
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <>
        <Error />
        <Button onClick={handleAgain} variant="contained">
          Try Again
        </Button>
      </>
    );
  }

  return <>{data && <TableComponent users={data} />}</>;
};
