import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import navLinks from "../../data/navLinks.json";

import { TemporaryDrawerContainer } from "./temporary-drawer.styles";
import { Link } from "react-scroll";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {navLinks.map((link) => (
          <Link
            onClick={toggleDrawer(anchor,false)}
            key={link.id}
            offset={link.offset * window.innerWidth}
            to={link.name}
            smooth={true}
            duration={500}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={link.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <TemporaryDrawerContainer>
      <React.Fragment key={"right"}>
        <button onClick={toggleDrawer("right", true)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <ThemeProvider theme={darkTheme}>
          <Drawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
          >
            {list("right")}
          </Drawer>
        </ThemeProvider>
      </React.Fragment>
    </TemporaryDrawerContainer>
  );
}
