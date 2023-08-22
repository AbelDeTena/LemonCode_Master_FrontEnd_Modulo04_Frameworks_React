import React from "react";

import { CenterLayout } from "./centered.styles";

type Props = React.PropsWithChildren;

export function CenteredLayout(props: Props) {
  const { children } = props;
  return <div className={CenterLayout}>{children}</div>;
}
