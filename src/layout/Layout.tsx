import { Outlet } from "react-router-dom";

type LayoutProps = {};

export const Layout = ({}: LayoutProps) => {
  return (
    <>
      <header>head</header>
      <Outlet />
      <footer>foot</footer>
    </>
  );
};
