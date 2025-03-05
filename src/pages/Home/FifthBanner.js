import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";



import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SickIcon from "@mui/icons-material/Sick";
import TelegramIcon from "@mui/icons-material/Telegram";
import { getGridStyles } from "../../components/gridStyles";

function FifthBanner() {
  

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
    <Box component="main" sx={{ flexGrow: 1, display: "flex",
      backgroundColor: "#F9F9F9",

     }}>
          <Grid container spacing={4} sx={getGridStyles()}>
        <Grid
          item
          xs={12}
          sx={{
            textAlign: "center",
            paddingBottom: "20px",
          }}
        >
          <Typography
            color={"#785aec"}
            sx={{
              fontSize: { md: 20, xs: 16 },
              fontWeight: 600,
            }}
          >
            Our Presence
          </Typography>

             <Typography
              sx={{
                fontSize: { md: 50, xs: 25 },
                fontWeight: 800,
                color: "#25373f",
              }}
              component={"span"}
            >
             We are Featured On{" "}
            </Typography>
        </Grid>

        {icons.map((item) => (
          <Grid
            key={item.id}
            item
            xs={6}
            sm={6}
            md={2}
            display="flex"
            flexDirection="row"
            justifyContent="center"
          >
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  backgroundColor: "#785aec",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  transition: "box-shadow 0.3s ease, transform 0.3s ease",
                  "&:hover": {
                    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                    transform: "translateY(-5px)",
                    color: "white",
                  },
                }}
              >
                {item.icon}
              </Box>
              <Typography
                mt={2}
                fontWeight={500}
                color="black"
                sx={{ fontSize: "16px" }}
              >
                {item.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default FifthBanner;
