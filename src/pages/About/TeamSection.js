import { Container, Grid, Typography, Box } from "@mui/material";
import { getGridStyles } from "../../components/gridStyles";
import { Stack } from "@mui/material";

const teamMembers = [
  {
    name: "Nick Mwendwa",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    description: [
      "Nick is an Entrepreneur and Tech enthusiast. He founded Riverbank Solutions Ltd, a Fintech solutions provider 13 years ago providing payment solutions and creating great teams that have delivered in the areas of financial inclusion, social protection programs and other verticals in the period of time.",
      "He is passionate about crypto and the possibilities that DeFi presents to communities around the world. As the Founder of Swerri, Nick is at the forefront of Blockchain, Crypto and DeFi adoption with the bigger mission of bringing DeFi to the global population.",
    ],
  },
  {
    name: "Lynda Ambiyo",
    role: "COO",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop",
    description: [
      "Lynda is a business executive who is a stickler for processes and operations. As an operations lead for the last 7 years in the Fintech and payments space, she is tried, tested and experienced in starting and growing businesses. She is a growth specialist enthusiastic about Crypto and at Swerri she commands operations and customer success.",
    ],
  },
  {
    name: "Robert Maoga",
    role: "CFO",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
    description: [
      "Robert is an alumni of Stanford SEED (EA) Cohort 2 and a Director at Riverbank Solutions Ltd. As a Co-founder, he has led teams in finance and brings along tremendous experience in startups and Fintech in the last 15 years especially in the area of business scaling to Swerri. He believes the Change Crypto and DeFi is bringing to the world of finance is second to none.",
    ],
  },
];

function App() {
  return (
       <Box component="main" sx={{ flexGrow: 1, display: "flex" }}>
   
      <Grid container spacing={4} sx={getGridStyles()}>
        <Stack
          direction="column"
          alignItems="center"
          spacing={2} 
          sx={{
            width: "100%", 
            textAlign: "center", 
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              mb: 2,
              color: "#1a2b3c",
              fontWeight: "bold",
            }}
          >
            Team
          </Typography>

          <Typography
            sx={{
              mb: 6,
              color: "#666",
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            The Swerri team believes in the decentralized nature of financial
            transactions today and in the future. Our mission is to bring DeFi
            to the world.
          </Typography>
        </Stack>

    
          {teamMembers.map((member, index) => (
            <Grid
            mt={2}
              item
              xs={12}
              md={index === 0 ? 12 : 6}
              key={member.name}
              sx={{
                display: "flex",
                flexDirection: index === 0 ? "row" : "column",
                "@media (max-width: 960px)": {
                  flexDirection: "column",
                },
              }}
            >
              <Box
                sx={{
                  width: index === 0 ? "40%" : "100%",
                  "@media (max-width: 960px)": {
                    width: "100%",
                  },
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: "100%",
                    height: index === 0 ? "500px" : "400px",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />
              </Box>

              <Box
                sx={{
                  flex: 1,
                  pl: index === 0 ? 4 : 0,
                  pt: index === 0 ? 0 : 2,
                  "@media (max-width: 960px)": {
                    pl: 0,
                    pt: 2,
                  },
                }}
              >
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    color: "#6366f1",
                    mb: 1,
                    fontWeight: "medium",
                  }}
                >
                  {member.name}
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    color: "#4b5563",
                    mb: 2,
                  }}
                >
                  {member.role}
                </Typography>

                {member.description.map((paragraph, i) => (
                  <Typography
                    key={i}
                    sx={{
                      color: "#666",
                      mb: 2,
                      lineHeight: 1.7,
                    }}
                  >
                    {paragraph}
                  </Typography>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
    </Box>
  );
}

export default App;
