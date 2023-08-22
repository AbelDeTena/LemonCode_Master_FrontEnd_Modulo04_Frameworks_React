import React from "react";

import { DetailLayout } from "./detail.styles";

type Props = React.PropsWithChildren;

export function DetailsLayout(props: Props) {
  const { children } = props;
  return <div className={DetailLayout}>{children}</div>;
}
