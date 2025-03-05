import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { Grid2, MenuItem, Stack } from "@mui/material";
import { Download } from "@mui/icons-material";
import { styled } from "@mui/system";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CustomButton from "../components/CustomButton";
import Grid from "@mui/material/Grid";
import EmojiGrid from "../components/EmogiContainer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getGridStyles } from "../components/gridStyles";

const pages = ["Home", "Swerri", "SWET Token", "About Us"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElSwerri, setAnchorElSwerri] = React.useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const Logo = styled("img")({
    width: "100px",
    height: "30px",
    marginRight: "10px",
  });

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenSwerriMenu = (event) => {
    setAnchorElSwerri(event.currentTarget);
  };

  const handleCloseSwerriMenu = () => {
    setAnchorElSwerri(null);
  };

  const isActive = (path) => location.pathname === path;
  const handleNavigation = (path) => {
    navigate(path);
    handleCloseNavMenu();
    handleCloseSwerriMenu();
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        boxShadow: "none",
        width:"auto",
        ...getGridStyles({ marginTop: 0,marginBottom: 0 }),

      }}
    >
      {/* <Grid
        container
        spacing={4}
        sx={{
          ...getGridStyles({ marginTop: 1 }),
        }}
      > */}
        <Toolbar
          disableGutters
          sx={{
            padding: {
              // xs: "10px 20px",
              // sm: "20px 50px",
              // md: "20px 20px",
              width: "100%",
            },
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Box
              component="img"
              src="https://swerri.io/image/png/logo-dark.png"
              alt="Logo"
              sx={{
                height: { xs: "25px", md: "30px" },
                cursor: "pointer",
                "&:hover": {
                  filter: "brightness(0.8)",
                },
              }}
            />
          </Link>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="open navigation menu"
              onClick={handleOpenNavMenu}
              sx={{
                color: "black",
                "&:hover": {
                  color: "#785AEC",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => {
                if (page === "Swerri") {
                  return (
                    <Box key={page}>
                      <MenuItem onClick={handleOpenSwerriMenu}>{page}</MenuItem>
                      <Menu
                        anchorEl={anchorElSwerri}
                        open={Boolean(anchorElSwerri)}
                        onClose={handleCloseSwerriMenu}
                      >
                        <MenuItem
                          sx={{
                            color: isActive("/swerri/what")
                              ? "#785AEC"
                              : "#262729",
                            "&:hover": {
                              fontWeight: 600,
                              color: "#785AEC",
                              backgroundColor: "transparent",
                            },
                          }}
                          onClick={() => handleNavigation("/swerri/what")}
                        >
                          What is Swerri?
                        </MenuItem>
                        <MenuItem
                          sx={{
                            color: isActive("/swerri/circles")
                              ? "#785AEC"
                              : "#262729",
                            "&:hover": {
                              fontWeight: 600,
                              color: "#785AEC",
                              backgroundColor: "transparent",
                            },
                          }}
                          onClick={() => handleNavigation("/swerri/circles")}
                        >
                          Swerri Circles
                        </MenuItem>
                        <MenuItem
                          sx={{
                            color: isActive("/swerri/master")
                              ? "#785AEC"
                              : "#262729",
                            "&:hover": {
                              fontWeight: 600,
                              color: "#785AEC",
                              backgroundColor: "transparent",
                            },
                          }}
                          onClick={() => handleNavigation("/swerri/master")}
                        >
                          Swerri Master
                        </MenuItem>
                      </Menu>
                    </Box>
                  );
                }
                const path =
                  page === "home"
                    ? "/"
                    : `/${page.toLowerCase().replace(/\s+/g, "-")}`;
                return (
                  <MenuItem
                    key={page}
                    onClick={() => handleNavigation(path)}
                    sx={{
                      color: isActive(path) ? "#785AEC" : "#262729",
                      "&:hover": {
                        fontWeight: 600,
                        color: "#785AEC",
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    {page}
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
          <Stack
            direction="row"
            spacing={4}
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              marginLeft: "24px",
            }}
          >
            {pages.map((page) => {
              if (page === "Swerri") {
                return (
                  <Box
                    key={page}
                    sx={{
                      position: "relative",
                      "&:hover .dropdown-menu": {
                        display: "block",
                      },
                      "&:hover .hover-effect": {
                        width: "100%",
                        backgroundColor: "#785AEC",
                      },
                    }}
                  >
                    <Button
                      sx={{
                        color: "#262729",
                        display: "flex",
                        alignItems: "center",
                        fontSize: "16px",
                        fontWeight: 400,
                        fontStyle: "normal",
                        letterSpacing: "-0.1px",
                        lineHeight: 1.75,
                        textTransform: "none",
                        transition: "color 0.3s ease, transform 0.3s ease",
                        "&:hover": {
                          color: "#785AEC",
                          backgroundColor: "transparent",
                        },
                      }}
                    >
                      {page}

                      <Box
                        component="span"
                        sx={{
                          display: "inline-block",
                          marginLeft: "5px",
                          fontSize: "18px",
                          transition: "transform 0.3s ease",
                          transform: "rotate(0deg)",
                        }}
                      >
                        <ArrowDropDownIcon />
                      </Box>
                    </Button>

                    <Box
                      className="dropdown-menu"
                      sx={{
                        display: "none",
                        position: "absolute",
                        top: "100%",
                        left: "0",
                        zIndex: 10,
                        backgroundColor: "white",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                        borderRadius: "8px",
                        padding: "10px 0",
                        width: "200px",
                        borderTop: "4px solid #785AEC",
                      }}
                    >
                      <MenuItem
                        sx={{
                          color: isActive("/swerri/what")
                            ? "#785AEC"
                            : "INHERIT",

                          "&:hover": {
                            color: "#785AEC",
                            backgroundColor: "transparent",
                          },
                        }}
                        onClick={() => handleNavigation("/swerri/what")}
                      >
                        What is Swerri?
                      </MenuItem>
                      <MenuItem
                        sx={{
                          color: isActive("/swerri/circles")
                            ? "#785AEC"
                            : "INHERIT",

                          "&:hover": {
                            color: "#785AEC",
                          },
                        }}
                        onClick={() => handleNavigation("/swerri/circles")}
                      >
                        Swerri Circles
                      </MenuItem>
                      <MenuItem
                        sx={{
                          color: isActive("/swerri/master")
                            ? "#785AEC"
                            : "INHERIT",

                          "&:hover": {
                            color: "#785AEC",
                          },
                        }}
                        onClick={() => handleNavigation("/swerri/master")}
                      >
                        Swerri Master
                      </MenuItem>
                    </Box>
                  </Box>
                );
              } else {
                const path =
                  page === "home"
                    ? "/"
                    : `/${page.toLowerCase().replace(/\s+/g, "-")}`;
                return (
                  <Button
                    key={page}
                    onClick={() => handleNavigation(path)}
                    sx={{
                      color: isActive(path) ? "#785AEC" : "#262729",

                      // color: "#262729",
                      // display: "block",
                      fontSize: "16px",
                      fontWeight: 400,
                      fontStyle: "normal",
                      letterSpacing: "-0.1px",
                      lineHeight: 1.75,
                      textTransform: "none",
                      transition: "color 0.3s ease, transform 0.3s ease",
                      minWidth: "50px",
                      "&:hover": {
                        fontWeight: 400,
                        color: "#785AEC",
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    {page}
                  </Button>
                );
              }
            })}
          </Stack>

          <Stack direction="row" spacing={2} sx={{ flexGrow: 0 }}>
            <Tooltip title="Download App">
              {/* <CustomButton
                title="Launch App"
                MFontSize="15px"
                width="100%"
                bgColor="#785aec"
                color="white"
                hoverbgcolor="#6a26da"
              /> */}
            </Tooltip>

            <Tooltip title="Learn More">
              <CustomButton
                title="Download App"
                MFontSize="15px"
                width="100%"
                bgColor="#785aec"
                color="white"
                hoverbgcolor="#6a26da"
              />
            </Tooltip>
          </Stack>
        </Toolbar>
      {/* </Grid> */}
    </AppBar>
  );
}

export default ResponsiveAppBar;
