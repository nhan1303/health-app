import { Footer, Header } from "components";

import React from "react";
import { Outlet } from "react-router-dom";
import { Stack } from "ui-components";

export interface ILayoutProps {}

export const Layout: React.FC<ILayoutProps> = () => {
  console.count('Layout');
  
  return (
    <Stack width="100%" height="100vh" direction="column">
      <Header />
      <Stack flex={1}>
        <Outlet />
      </Stack>
      <Footer />
    </Stack>
  );
};
