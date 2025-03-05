import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Divider } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";
import ScrollReveal from "../../components/ScrollReveal";
import { getGridStyles } from "../../components/gridStyles";

function SwerriToken() {
  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  return (
    <ScrollReveal animationVariants={animationVariants}>
      <Box component="main" sx={{ flexGrow: 1, display: "flex" }}>
           <Grid container spacing={4} sx={getGridStyles()}>
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              padding: {
                //   xs: "20px",
                //   sm: "20px",
                //   md: "20px",
              },
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
                Swerri Token{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: { md: 40, xs: 25 },
                  fontWeight: 800,
                  color: "#785aec",
                }}
                component={"span"}
              >
                SWET
              </Typography>
            </Typography>
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
              sx={{
                fontSize: "18px",
                textAlign: "left",
                fontWeight: 400,
                color: "rgba(37, 55, 63, 0.7)",
                //   py: 1,
              }}
            >
              Swerri is a Decentralized Finance (DeFi) Protocol on the Binance
              <br />
              Smart Chain Blockchain which combines the power of DeFi in crypto
              <br />
              and the functionalities of a decentralized exchange. Swerri App
              <br />
              allows members to create a circle of friends and transact in
              crypto
              <br />
              together. On Swerri a member can lend, borrow and earn from
              trading together. They can also buy, convert, Pay and send crypto.
              <br />
              learn, lend and borrow.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontSize: "18px",
                textAlign: "left",
                fontWeight: 400,
                color: "rgba(37, 55, 63, 0.7)",
                py: 0,
              }}
            >
              Swerri is a Decentralized Finance (DeFi) Protocol on the Binance
              <br />
              Smart Chain Blockchain which combines the power of DeFi in crypto
              <br />
              and the functionalities of a decentralized exchange. Swerri App
              <br />
              allows members to create a circle of friends and transact in
              crypto
              <br />
              together. On Swerri a member can lend, borrow and earn from
              trading together. They can also buy, convert, Pay and send crypto.
              <br />
              learn, lend and borrow.
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={12}
            sx={{
              padding: {
                //   xs: "20px",
                //   sm: "20px",
                //   md: "20px",
              },
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
                Swerri Token{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: { md: 40, xs: 25 },
                  fontWeight: 800,
                  color: "#785aec",
                }}
                component={"span"}
              >
                Utilities
              </Typography>
            </Typography>
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
              allows members to create a circle of friends and transact in
              crypto
              <br />
              together. On Swerri a member can lend, borrow and earn from
              trading together. They can also buy, convert, Pay and send crypto.
              <br />
              learn, lend and borrow.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontSize: "18px",
                textAlign: "left",
                fontWeight: 400,
                color: "rgba(37, 55, 63, 0.7)",
                //   py: 4,
              }}
            >
              Swerri is a Decentralized Finance (DeFi) Protocol on the Binance
              <br />
              Smart Chain Blockchain which combines the power of DeFi in crypto
              <br />
              and the functionalities of a decentralized exchange. Swerri App
              <br />
              allows members to create a circle of friends and transact in
              crypto
              <br />
              together. On Swerri a member can lend, borrow and earn from
              trading together. They can also buy, convert, Pay and send crypto.
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
              src={require("../../assets/early-access.png")}
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
                fontSize: { md: 40, xs: 25 },
                textAlign: "left",
              }}
            >
              {" "}
              <Typography
                sx={{
                  fontSize: { md: 50, xs: 25 },
                  fontWeight: 800,
                  color: "#25373f",
                }}
                component={"span"}
              >
                Early{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: { md: 40, xs: 25 },
                  fontWeight: 800,
                  color: "#785aec",
                }}
                component={"span"}
              >
                Access
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
              allows members to create a circle of friends and transact in
              crypto
              <br />
              together. On Swerri a member can lend, borrow and earn from
              trading together. They can also buy, convert, Pay and send crypto.
              <br />
              learn, lend and borrow.
            </Typography>
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
                  fontSize: { md: 40, xs: 25 },
                  fontWeight: 800,
                  color: "#25373f",
                }}
                component={"span"}
              >
                Swerri{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: { md: 40, xs: 25 },
                  fontWeight: 800,
                  color: "#785aec",
                }}
                component={"span"}
              >
                Circles
              </Typography>
            </Typography>

            <Typography
              sx={{
                fontSize: "18px",
                textAlign: "left",
                fontWeight: 400,
                color: "rgba(37, 55, 63, 0.7)",
                //   py: 1,
              }}
            >
              Swerri is a Decentralized Finance (DeFi) Protocol on the Binance
              <br />
              Smart Chain Blockchain which combines the power of DeFi in crypto
              <br />
              and the functionalities of a decentralized exchange. Swerri App
              <br />
              allows members to create a circle of friends and transact in
              crypto
              <br />
              together. On Swerri a member can lend, borrow and earn from
              trading together. They can also buy, convert, Pay and send crypto.
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
              src={require("../../assets/projects.png")}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <Typography
              color={"black"}
              sx={{
                fontSize: { md: 50, xs: 25 },
                textAlign: "left",
              }}
            >
              {" "}
              <Typography
                sx={{
                  fontSize: { md: 50, xs: 25 },
                  fontWeight: 800,
                  color: "#25373f",
                }}
                component={"span"}
              >
                SWET{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: { md: 50, xs: 25 },
                  fontWeight: 800,
                  color: "#785aec",
                }}
                component={"span"}
              >
                Economics
              </Typography>
            </Typography>
            <br />

            <Box
              sx={{
                width: "100%",
                margin: "auto",
                display: "block",
              }}
              component={"img"}
              alt="logo"
              src={require("../../assets/swet-economics.png")}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <Typography
              color={"black"}
              sx={{
                fontSize: { md: 50, xs: 25 },
                textAlign: "left",
              }}
            >
              {" "}
              <Typography
                sx={{
                  fontSize: { md: 50, xs: 25 },
                  fontWeight: 800,
                  color: "#25373f",
                }}
                component={"span"}
              >
                SWET{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: { md: 50, xs: 25 },
                  fontWeight: 800,
                  color: "#785aec",
                }}
                component={"span"}
              >
                Roadmap
              </Typography>
            </Typography>
            <br />

            <Box
              sx={{
                width: "100%",
                margin: "auto",
                display: "block",
              }}
              component={"img"}
              alt="logo"
              src={require("../../assets/swerri-roadmap.png")}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <Typography
              color={"black"}
              sx={{
                fontSize: { md: 50, xs: 25 },
                textAlign: "left",
              }}
            >
              {" "}
              <Typography
                sx={{
                  fontSize: { md: 50, xs: 25 },
                  fontWeight: 800,
                  color: "#25373f",
                }}
                component={"span"}
              >
                Burn{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: { md: 50, xs: 25 },
                  fontWeight: 800,
                  color: "#785aec",
                }}
                component={"span"}
              >
                Mechanism
              </Typography>
            </Typography>
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
              Swerri is a Decentralized Finance (DeFi) Protocol on the Binance
              <br />
              Smart Chain Blockchain which combines the power of DeFi in crypto
              <br />
              and the functionalities of a decentralized exchange. Swerri App
              <br />
              allows members to create a circle of friends and transact in
              crypto
              <br />
              together. On Swerri a member can lend, borrow and earn from
              trading together. They can also buy, convert, Pay and send crypto.
              <br />
              learn, lend and borrow.
            </Typography>
          </Grid>

          <Grid item xs={12} md={12}>
            <Typography
              color={"black"}
              sx={{
                fontSize: { md: 50, xs: 25 },
                textAlign: "left",
              }}
            >
              {" "}
              <Typography
                sx={{
                  fontSize: { md: 50, xs: 25 },
                  fontWeight: 800,
                  color: "#25373f",
                }}
                component={"span"}
              >
                Summary{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: { md: 50, xs: 25 },
                  fontWeight: 800,
                  color: "#785aec",
                }}
                component={"span"}
              ></Typography>
            </Typography>
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
              Swerri is a Decentralized Finance (DeFi) Protocol on the Binance
              <br />
              Smart Chain Blockchain which combines the power of DeFi in crypto
              <br />
              and the functionalities of a decentralized exchange. Swerri App
              <br />
              allows members to create a circle of friends and transact in
              crypto
              <br />
              together. On Swerri a member can lend, borrow and earn from
              trading together. They can also buy, convert, Pay and send crypto.
              <br />
              learn, lend and borrow.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </ScrollReveal>
  );
}

export default SwerriToken;
