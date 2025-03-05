import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";
import { getGridStyles } from "../../components/gridStyles";

function WhatSwerri() {
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
                fontSize: { md: 40, xs: 25 },
                fontWeight: 800,
                color: "#25373f",
              }}
              component={"span"}
            >
              What is{" "}
            </Typography>
            <Typography
              sx={{
                fontSize: { md: 40, xs: 25 },
                fontWeight: 800,
                color: "#785aec",
              }}
              component={"span"}
            >
              Swerri
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
            <br />

            Smart Chain Blockchain which combines the power of DeFi in crypto
            <br />

            and the functionalities of a decentralized exchange. Swerri App
            <br />

            allows members to create a circle of friends and transact in crypto
            <br />

            together. On Swerri a member can lend, borrow and earn from trading
            together. They can also buy, convert, Pay and send crypto.
            <br />
            learn, lend and borrow.
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
            src={require("../../assets/what-is-swerri-intro.png")}
          />
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
            src={require("../../assets/why-swerri.png")}
          />
        </Grid>
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
              Why {" "}
            </Typography>
            <Typography
              sx={{
                fontSize: { md: 58, xs: 25 },
                fontWeight: 800,
                color: "#785aec",
              }}
              component={"span"}
            >
              Swerri?
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
            <br />

            Smart Chain Blockchain which combines the power of DeFi in crypto
            <br />

            and the functionalities of a decentralized exchange. Swerri App
            <br />

            allows members to create a circle of friends and transact in crypto
            <br />

            together. On Swerri a member can lend, borrow and earn from trading
            together. They can also buy, convert, Pay and send crypto.
            <br />
            learn, lend and borrow.
          </Typography>
        </Grid>

       
      </Grid>

    

    </Box>
  );
}

export default WhatSwerri;
