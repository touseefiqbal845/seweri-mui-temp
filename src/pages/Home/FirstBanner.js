import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import EmojiGrid from "../../components/EmogiContainer";
import { Grid } from "@mui/material";

import RecyclingOutlinedIcon from "@mui/icons-material/RecyclingOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import TollOutlinedIcon from "@mui/icons-material/TollOutlined";
import { getGridStyles } from "../../components/gridStyles";

function FirstBanner() {
  const CircleBox = styled(Box)(({ theme }) => ({
    width: { xs: "30px", md: "60px" },
    height:{ xs: "30px", md: "60px" },
    borderRadius: "50%",
    // backgroundColor: "#e4defb",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#785aec",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s ease, transform 0.3s ease",
    "&:hover": {
      boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
      transform: "translateY(-5px)",
    },
  }));

  const icons = [
    { id: 1, icon: <SellOutlinedIcon fontSize="large" />, label: "Buy" },
    { id: 2, icon: <InventoryOutlinedIcon fontSize="large" />, label: "Sell" },
    {
      id: 3,
      icon: <RecyclingOutlinedIcon fontSize="large" />,
      label: "Convert",
    },
    { id: 4, icon: <TollOutlinedIcon fontSize="large" />, label: "Circles" },
  ];

  return (
    <Box component="main" sx={{ flexGrow: 1, display: "flex" }}>
      <Grid container spacing={4} sx={getGridStyles()}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            // paddingTop: "20px",
          }}
        >
          <Typography
            color={"black"}
            sx={{
              fontSize: { md: 48, xs: 25 },
              textAlign: "left",
            }}
          >
            {" "}
            <Typography
              sx={{
                fontSize: { md: 58, xs: 25 },
                fontWeight: 800,
                color: "#25373f",
              }}
              component={"span"}
            >
              Join and Grow{" "}
            </Typography>
            <br />
            <Typography
              sx={{
                fontSize: { md: 58, xs: 25 },
                fontWeight: 800,
                color: "#785aec",
              }}
              component={"span"}
            >
              Together!
            </Typography>
          </Typography>

          <Typography
            sx={{
              fontSize: "18px",
              textAlign: "left",
              fontWeight: 400,
              color: "rgba(37, 55, 63, 0.7)",
              py: 1,
            }}
          >
            Join with friends and together
            <br />
            learn, lend and borrow.
          </Typography>

          <Stack
            py={4}
            direction={"row"}
            spacing={4}
            sx={{ justifyContent: { xs: "center", md: "center" } }}
          >
            {icons.map((item) => (
              <Grid
                key={item.id}
                item
                xs={12}
                sm={6}
                md={3}
                display="flex"
                justifyContent="center"
              >
                <Box sx={{ textAlign: "center" }}>
                  <CircleBox>{item.icon}</CircleBox>
                  <Typography mt={2} fontWeight={500}>
                    {item.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Stack>
        </Grid>

        <EmojiGrid img={require("../../assets/intro-section.png")} />
        {/*<Box
                  component={"img"}
                  sx={{
                    width: 20, // Adjust image size
                    height: 20,
                  }}
                  src={require("../assets/human.png")}
                  alt="Pin Icon"
                /> */}
      </Grid>
    </Box>
  );
}

export default FirstBanner;
