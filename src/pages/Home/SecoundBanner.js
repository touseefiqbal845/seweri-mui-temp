import React from "react";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import CustomButton from "../../components/CustomButton";
import { getGridStyles } from "../../components/gridStyles";

// Image Component for Reusability
const ImageBox = ({ src, alt, width, height }) => (
  <Box
    sx={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        width: width || "100%",
        height: height || "auto",
        objectFit: "contain",
      }}
    />
  </Box>
);

const BannerText = () => (
  <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
    <Typography
      color="black"
      sx={{ fontSize: { md: 20, xs: 10 }, color: "#785aec", fontWeight: 600, textAlign: "left" }}
    >
      Introducing Swerri <br />
      <Typography
        component="span"
        sx={{ fontSize: { md: 58, xs: 25 }, fontWeight: 800, color: "#25373f" }}
      >
        We Exist To
      </Typography>
      <br />
      <Typography
        component="span"
        sx={{ fontSize: { md: 58, xs: 25 }, fontWeight: 800, color: "#785aec" }}
      >
        Simplify Crypto
      </Typography>
    </Typography>

    <Typography
      sx={{ fontSize: "18px", textAlign: "left", fontWeight: 400, color: "rgba(37, 55, 63, 0.7)", py: 1 }}
    >
      Join together with friends in your community to Earn, Lend and Borrow. <br />
      Easily buy, convert, and send crypto on your phone.
    </Typography>

     <Stack
            py={4}
            direction={"row"}
            spacing={2}
            sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
          >
            <Box sx={{ flexGrow: 0 }}>
              <CustomButton
                title="Get Started Today"
                MFontSize="15px"
                width="100%"
                bgColor="#785aec"
                color="white"
                hoverbgcolor="#6a26da"
              />
            </Box>
          </Stack>
  </Box>
);

function SecoundBanner() {
  return (
      <Box component="main" sx={{ flexGrow: 1, display: "flex" ,

        backgroundColor: "#e4defb",

      }}>
            <Grid container spacing={4} sx={getGridStyles()}>
        <Grid item xs={12} md={3}>
          <ImageBox src={require("../../assets/front-mobile.png")} alt="Front Logo" />
        </Grid>

        {/* Right Image */}
        <Grid item xs={12} md={3}>
          <ImageBox
            src={require("../../assets/side-mobile.png")}
            alt="Side Logo"
            width="50%"
            height="50%"
          />
        </Grid>

        {/* Text Content */}
        <Grid item xs={12} md={6}>
          <BannerText />
        </Grid>
      </Grid>
    </Box>
  );
}

export default SecoundBanner;
