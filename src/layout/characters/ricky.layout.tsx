import React from "react";

import { RickyStyles } from "./ricky.styles";

interface Props extends React.PropsWithChildren {}

export function RickyLayout(props: Props) {
  const { children } = props;
  return <div className={RickyStyles}>{children}</div>;
}
