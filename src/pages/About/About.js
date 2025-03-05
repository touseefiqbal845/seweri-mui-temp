import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import { getGridStyles } from "../../components/gridStyles";
import App from "./TeamSection";

function About() {
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
          }}
        >
          <Typography
            color={"black"}
            sx={{
              fontSize: { md: 48, xs: 25 },
              textAlign: "left",
            }}
          >
            <Typography
              sx={{
                fontSize: { md: 40, xs: 25 },
                fontWeight: 800,
                color: "#25373f",
              }}
              component={"span"}
            >
              About{" "}
            </Typography>
            <Typography
              sx={{
                fontSize: { md: 40, xs: 25 },
                fontWeight: 800,
                color: "#785aec",
              }}
              component={"span"}
            >
              Us
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
            Swerri is a Decentralized Finance (DeFi) Protocol on the Binance
            Smart Chain Blockchain which combines the power of DeFi in crypto
            and the functionalities of a decentralized exchange. Swerri App
            allows members to create a circle of friends and transact in crypto
            together. On Swerri, a member can lend, borrow, and earn from trading
            together. They can also buy, convert, pay, and send crypto.
          </Typography>
        </Grid>

       
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              margin: "auto",
              display: "block",
            }}
            component={"img"}
            alt="logo"
            src={require("../../assets/about-us.png")}
          />
        </Grid>
      </Grid>

    </Box>
  );
}

export default About;
