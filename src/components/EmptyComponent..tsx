import { ReactNode } from "react";

export const EmptyComponent = (props: { children: ReactNode }) => {
  return <>{props.children}</>;
};
