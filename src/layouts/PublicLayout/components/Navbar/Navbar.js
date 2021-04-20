import { useEffect, useState, useRef, useMemo } from "react";
import React from "react";
import { COLORS } from "../../../../theme/mainTheme";
import { Circles, Drawer } from "./components";
import { Text } from "../../../../components";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [drawer, setDrawer] = useState(false);

  const handleDrawer = () => {
    setDrawer(true);
  };

  const drawerClose = () => {
    setDrawer(false);
  };

  return (
    <React.Fragment>
      <Drawer isOpen={drawer} close={drawerClose} />
      <header style={{ backgroundColor: COLORS.primary }}>
        <div className="flex justify-center md:justify-between md:px-32 items-center ">
          <div className="relative items-center">
            {/* <svg
              onClick={handleDrawer}
              className="h-8 w-8 absolute -left-24 text-white cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg> */}
            <Link to="/">
              <div className="cursor-pointer flex items-center justify-center">
                <img
                  src="/static/images/logo.png"
                  width="100px"
                  className="mt-2"
                />
                <div>
                  <Text variant="white" classes="font-bold" size="md">
                    <span style={{ color: COLORS.secondary }}>Coupon</span>
                    Soupon
                  </Text>
                </div>
              </div>
            </Link>
          </div>
          <div className="hidden md:block">
            <Circles />
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
