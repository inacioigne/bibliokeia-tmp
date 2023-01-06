"use client";
// MUI
import {
  Container,
  Paper,
  Grid,
  Box,
  IconButton,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Button,
  Breadcrumbs,
} from "@mui/material/";
import {
  ImportContacts,
  Subject,
  Language,
  Home,
  Person3,
  Class,
  DashboardCustomize,
} from "@mui/icons-material/";
import TitleIcon from "@mui/icons-material/Title";

import { blue } from "@mui/material/colors";

// BiblioKeia Components
import BreadcrumbsBK from "src/components/nav/breadcrumbs";

// BiblioKeia Components
import Content from "src/components/bibframe/content";
import Title from "src/components/bibframe/title";
import Contribution from "src/components/bibframe/contribution";

// Next Components
import Link from "next/link";


const menuStyle = {
  borderRadius: "6px",
  mx: "0.5rem",
  mb: "0.5rem",
  pl: "0.5rem",
  color: "text.secondary",
  ":hover": {
    backgroundColor: blue[100],
    color: "text.primary",
  },
};

const previousPaths = [
  {
    link: "admin",
    label: "Início",
    icon: <Home fontSize="small" />,
  },
  {
    link: "cataloguing",
    label: "Catalogação",
    icon: <DashboardCustomize fontSize="small" />,
  },
];

// React Hooks
import { useState } from "react";

const metadados = [
  { label: "Tipo", icon: ImportContacts },
  { label: "Título", icon: TitleIcon  },
  { label: "Autor", icon: Person3   },
  { label: "Assunto", icon: Subject },
  { label: "Idioma", icon: Language  },
  { label: "Classificação", icon: Class   },
];

export default function Book() {
    const [visible, setVisible] = useState(0);
  return (
    <Container maxWidth="xl">
      <Box my={"1rem"}>
        <BreadcrumbsBK previousPaths={previousPaths} currentPath="Livros" />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Obra
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Paper>
            <Typography variant="subtitle2" sx={{ p: "1rem" }}>
              Metadados
            </Typography>
            <MenuList>
              {metadados.map((metadado, index) => (
                <MenuItem
                  key={index}
                  sx={
                    visible == index
                      ? {
                          ...menuStyle,
                          backgroundColor: blue[100],
                          color: "text.primary",
                        }
                      : { ...menuStyle }
                  }
                  onClick={() => {
                    setVisible(index);
                  }}
                >
                  <ListItemIcon>
                    {/* <ImportContacts
                      sx={{ ":hover": { color: "text.primary" } }}
                    /> */}
                    <metadado.icon />
                  </ListItemIcon>
                  <ListItemText>{metadado.label}</ListItemText>
                </MenuItem>
              ))}
            </MenuList>
          </Paper>
        </Grid>
        <Grid item xs={9}>
        <Paper>
        {visible === 0 && <Content defaultType="Texto" />}
        {visible === 1 && <Title />}
        {visible === 2 && <Contribution />}

            
        </Paper>
        </Grid>

      </Grid>
    </Container>
  );
}
