// MUI
import { Box, Typography } from "@mui/material/";

// BiblioKeia Components
import NamesBK from "src/components/thesaurus/namesBK";

export default function Contribution() {
  return (
    <Box>
      <Typography variant="subtitle2" sx={{ p: "1rem" }}>
        Responsabilidades
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <NamesBK />
      </Box>
    </Box>
  );
}
