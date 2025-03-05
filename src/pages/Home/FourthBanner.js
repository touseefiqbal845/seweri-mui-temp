import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import EmojiGrid from "../../components/EmogiContainer";
import { Grid } from "@mui/material";
import CustomButton from "../../components/CustomButton";
import { getGridStyles } from "../../components/gridStyles";

function FourthBanner() {
  return (
  <Box component="main" sx={{ flexGrow: 1, display: "flex" }}>
        <Grid container spacing={4} sx={getGridStyles()}>
           <Grid
             item
             xs={12}
             md={6}
             sx={{

             }}
           >
          <Typography
            color={"black"}
            sx={{
              fontSize: { md: 20, xs: 10, color: "#785aec", fontWeight: 600 },
              textAlign: "left",
            }}
          >
            Our very own Token <br />
            <Typography
              sx={{
                fontSize: { md: 50, xs: 25 },
                fontWeight: 800,
                color: "#25373f",
              }}
              component={"span"}
            >
              Swerri Token{" "}
            </Typography>
            <Typography
              sx={{
                fontSize: { md: 50, xs: 25 },
                fontWeight: 800,
                color: "#785aec",
              }}
              component={"span"}
            >
              SWET
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
            The Swerri Token SWET is the utility token on the 
            <br />
            Swerri Ecosystem
            used for  payment of fees, Rewards and 
            <br />
            various incentives.It is issued on the Binance Smart Chain blockchain 
            <br />
            as a BEP-20
            token. Members on the Swerri Platform acquire the SWET 
            <br />
            for many activities geared
            towards  energizing the network and partnerships.
          </Typography>

          <Stack
            py={4}
            direction={"row"}
            spacing={2}
            sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
          >
            <Box sx={{ flexGrow: 0 }}>
              <CustomButton
                title="Learn more"
                MFontSize="15px"
                width="100%"
                bgColor="white"
                color="#785aec"
                hoverbgcolor="white"   
              />
            </Box>
          </Stack>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "rgb(214 247 255)",

            // paddingTop: "20px",
          }}
        >
          <Typography
            color={"black"}
            sx={{
              fontSize: {
                md: 18,
                xs: 10,
                color: "rgba(37, 55, 63, 0.7)",
                fontWeight: 700,
              },
              textAlign: "left",
            }}
          >
            You can now import the Swerri SWET Token using our Swerri
            <br />
            Smart Contract on the Binance Smart Chain Mainnet.
            <br />
            <br />
            <br />
            <Typography
            sx={{
              fontSize: "18px",
              textAlign: "left",
              fontWeight: 400,
              color: "rgba(37, 55, 63, 0.7)",
              py: 1,
            }}
          >
           Our Token Contract Address:
          
          </Typography>

          <Typography
  sx={{
    fontSize: { xs: "14px", lg: "18px" },
    textAlign: "left",
    fontWeight: 400,
    color: "#785aec",
    py: 1,
    cursor: "pointer",
    textDecoration: "none", 
    transition: "color 0.3s ease", 
    
    "&:hover": {
      color: "#5639db", 
      textDecoration: "underline", 
    },
  }}
  onClick={() => window.open("https://etherscan.io/address/0x390F2c8D6DC2eEEAE043e0EA08e4C3b37D2BADB9", "_blank")}
>
  0x390F2c8D6DC2eEEAE043e0EA08e4C3b37D2BADB9
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
          Circles Contract Address:
          
          </Typography>
          <Typography
  sx={{
    fontSize: { xs: "14px", lg: "18px" },

    textAlign: "left",
    fontWeight: 400,
    color: "#785aec",
    py: 1,
    cursor: "pointer", 
    textDecoration: "none", 
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#5639db", 
      textDecoration: "underline", 
    },
  }}
  onClick={() => window.open("https://etherscan.io/address/0x390F2c8D6DC2eEEAE043e0EA08e4C3b37D2BADB9", "_blank")}
>
  0x390F2c8D6DC2eEEAE043e0EA08e4C3b37D2BADB9
</Typography>

          </Typography>

        </Grid>
      </Grid>
    </Box>
  );
}

export default FourthBanner;
