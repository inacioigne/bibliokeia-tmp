import {
  TextField,
  Box,
  IconButton,
  InputAdornment,
  Dialog,
  DialogTitle,
  Typography,
  Divider,
  DialogContent,
  Grid,
  List,
  ListItem,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
  Tooltip,
  ListItemText,
  Pagination,
} from "@mui/material/";
import { Search, Clear, FileDownloadDone } from "@mui/icons-material/";

import { ApiLoc } from "src/services/apiLoc/loc";

// React Hooks
import { useState, useEffect } from "react";

export default function ThesaurusLCSH({
  open,
  setOpen,
  setOpenBK,
  setSubjectBK,
}) {
  const [type, setType] = useState("all");
  const [collection, setCollection] = useState("LCSH_General");

  const getData = (
    subject = "",
    type = "",
    memberOf = "LCSH_General",
    page = 1
  ) => {
    let params = {
      q: `${subject}`,
      offset: page,
      rdftype: `${type}`,
      memberOf: `http://id.loc.gov/authorities/subjects/collection_${memberOf}`,
    };

    ApiLoc.get("authorities/subjects/suggest2/", {
      params: params,
    })
      .then((response) => {
        setHits(response.data.hits);
      })
      .catch(function (error) {
        console.log("ERROOO!!", error);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    getData(subject, type, collection);
  };

  return (
    <>
      <Dialog
        fullWidth={true}
        maxWidth={"lg"}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="div">Thesaurus LCSH</Typography>
          <IconButton color="primary" component="label" onClick={handleClose}>
            <Clear />
          </IconButton>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <Grid container>
            <Grid item xs={5} sx={{ borderRight: "solid 1px" }}>
              <form onSubmit={handleSearch}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    p: "1rem",
                  }}
                >
                  <Box sx={{ display: "flex", gap: "0.5rem" }}>
                    {/* Tipo */}
                    <FormControl fullWidth>
                      <InputLabel id="type">Tipo</InputLabel>
                      <Select
                        label="Tipo"
                        onChange={(event) => {
                          setType(event.target.value);
                        }}
                        value={type}
                      >
                        <MenuItem value={"all"}>Todos</MenuItem>
                        <MenuItem value={"Topic"}>Topic</MenuItem>
                        <MenuItem value={"SimpleType"}>Tipo Simples</MenuItem>
                        <MenuItem value={"ComplexType"}>Tipo Complexo</MenuItem>
                        <MenuItem value={"Geographic"}>Geographic</MenuItem>
                        <MenuItem value={"CorporateName"}>
                          Corporate Name
                        </MenuItem>
                      </Select>
                    </FormControl>
                      {/* Collection */}
                      <FormControl fullWidth>
                      <InputLabel id="collection">Coleção</InputLabel>
                      <Select
                        label="Coleção"
                        onChange={(event) => {
                          setCollection(event.target.value);
                        }}
                        value={collection}
                      >
                        <MenuItem value={"LCSH_General"}>Geral</MenuItem>
                        <MenuItem value={"Subdivisions"}>
                          LCSH - Subdivisions
                        </MenuItem>
                        <MenuItem value={"GeographicSubdivisions"}>
                          LCSH - Geographic
                        </MenuItem>
                        <MenuItem value={"GenreFormSubdivisions"}>
                          LCSH - GenreForm
                        </MenuItem>
                        <MenuItem value={"Geographic"}>
                          LCSH - Temporal
                        </MenuItem>
                      </Select>
                      </FormControl>

                  </Box>
                </Box>
              </form>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
}
