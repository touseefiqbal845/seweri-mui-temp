import React from "react";
import { Grid, Typography, Link, styled, Box } from "@mui/material";
import { getGridStyles } from "../components/gridStyles";

export default function Footer() {
  const Logo = styled("img")({
    width: "100px",
    height: "40px",
    marginRight: "10px",
  });

  const sections = [
    {
      title: "Company",
      links: [
        { text: "About Us", href: "#" },
        { text: "FAQs", href: "#" },
        { text: "Whitepaper", href: "#" },
        { text: "Privacy Policy", href: "#" },
        { text: "Terms & Conditions", href: "#" },
        { text: "Press", href: "#" },
      ],
    },
    {
      title: "Products",
      links: [
        { text: "Swerri Master", href: "#" },
        { text: "Swerri Circles", href: "#" },
        { text: "Swerri Token (SWET)", href: "#" },
      ],
    },
    {
      title: "Community",
      links: [
        { text: "Facebook", href: "#" },
        { text: "Twitter", href: "#" },
        { text: "Instagram", href: "#" },
        { text: "LinkedIn", href: "#" },
        { text: "Discord", href: "#" },
        { text: "Telegram", href: "#" },
      ],
    },
  ];

  return (
      <Box component="main" sx={{ flexGrow: 1, display: "flex",
      backgroundColor: "#7c4dff",

       }}>
           <Grid container spacing={4} sx={getGridStyles()}>
      
      
        <Grid item xs={12} sm={3}>
          <Logo src="https://swerri.io/image/png/logo-dark.png" alt="Logo" />
          <Typography
            variant="body2"
            style={{
              marginTop: "38px",
              lineHeight: "1.8",
              fontSize: "14px",
              fontWeight: 400,
              color: "rgba(248, 249, 252, 0.7)",
            }}
          >
            Join together with friends in your community to Earn, Lend and
            Borrow. Easily buy, convert and send crypto on your phone.
          </Typography>
        </Grid>

        {sections.map((section, index) => (
          <Grid item xs={12} sm={3} key={index}>
            <Typography
              variant="subtitle1"
              style={{
                marginTop: "38px",
                lineHeight: "1.8",
                fontSize: "14px",
                fontWeight: 400,
                color: "rgba(248, 249, 252, 0.7)",
              }}
            >
              {section.title}
            </Typography>
            <div style={{ marginTop: "16px" }}>
              {section.links.map((link, linkIndex) => (
                <div key={linkIndex} style={{ marginBottom: "8px" }}>
                  <Link
                    href={link.href}
                    underline="hover"
                    sx={{
                      lineHeight: "1.8",
                      fontSize: "13px",
                      fontWeight: 400,
                      color: "#fff",
                    }}
                  >
                    {link.text}
                  </Link>
                </div>
              ))}
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
