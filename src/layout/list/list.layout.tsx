import React from "react";

import { ListStyles } from "./list.styles";

interface Props extends React.PropsWithChildren {}

export function ListLayout(props: Props) {
  const { children } = props;
  return <div className={ListStyles}>{children}</div>;
}
