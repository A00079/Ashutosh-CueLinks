import React from "react";
import SideDrawer from "@material-ui/core/Drawer";

const Drawer = (props) => {
  const list = () => {
    return (
      <div style={{ width: "18rem" }}>
        {[...Array(5)].map((el, index) => (
          <div key={index}>{index}</div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <SideDrawer anchor="left" open={props.isOpen} onClose={props.close}>
        {list()}
      </SideDrawer>
    </div>
  );
};

export default Drawer;
