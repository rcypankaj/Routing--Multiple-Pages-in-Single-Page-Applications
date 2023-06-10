import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

// css
const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
