import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { Grid } from "@mui/material";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { PlayArrow } from "@mui/icons-material";
import { getGridStyles } from "../../components/gridStyles";

function SixthBanner() {
  const icons = [
    {
      id: 1,
      icon: <FacebookOutlinedIcon fontSize="small" />,
      label: "Youtube",
    },
    { id: 2, icon: <XIcon fontSize="small" />, label: "Incubate Africa" },
    {
      id: 3,
      icon: <InstagramIcon fontSize="small" />,
      label: "Medium",
    },
    { id: 4, icon: <LinkedInIcon fontSize="small" />, label: "Ali Tech Talks" },
  ];

  return (
  <Box component="main" sx={{ flexGrow: 1, display: "flex" }}>
        <Grid container spacing={4} sx={getGridStyles()}>
        <Grid
          item
          xs={12}
          sx={{
            textAlign: "center",
            // paddingBottom: "20px",
          }}
        >
          <Typography
            sx={{
              fontSize: { md: 50, xs: 25 },
              fontWeight: 800,
              color: "#25373f",
            }}
            component={"span"}
          >
            Our App Is Available For Free <br />
            <Typography
              sx={{
                fontSize: { md: 50, xs: 25 },
                fontWeight: 800,
                color: "#25373f",
              }}
              component={"span"}
            >
              On Google Play & Web
            </Typography>
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              textAlign: "center",
              fontWeight: 400,
              color: "rgba(37, 55, 63, 0.7)",
              py: 1,
            }}
          >
            Join today and Grow Together!
          </Typography>

          <div
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              gap: "16px",
              marginTop: "20px",
            }}
          >
            <Button
              variant="contained"
              startIcon={<PlayArrow />}
              style={{
                backgroundColor: "#00a382",
                color: "#fff",
                textTransform: "none",
                borderRadius: "30px",
                boxShadow: "0 10px 20px rgba(9, 154, 151, 0.6)",
                height: "50px",
                width: "150px",
                fontWeight: "bold",
                "&:hover": {
                  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              Google Play
            </Button>
            <Button
              variant="contained"
              startIcon={<PlayArrow />}
              style={{
                backgroundColor: "#7c4dff",
                color: "#fff",
                textTransform: "none",
                borderRadius: "30px",
                boxShadow: "0 10px 20px rgba(120, 90, 236, 0.6)",
                height: "50px",
                width: "150px",
                fontWeight: "bold",
                "&:hover": {
                  boxShadow: "0px 8px 16px rgba(121, 113, 241, 0.2)",
                },
              }}
            >
              Web App
            </Button>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SixthBanner;
