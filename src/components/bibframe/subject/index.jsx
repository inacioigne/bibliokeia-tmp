// MUI
import { Box, Typography, IconButton, Button } from "@mui/material/";
import RemoveIcon from "@mui/icons-material/Remove";

// react-hook-form
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";

// BiblioKeia Components
import ThesarusBK from "./thesarusBK";

export default function Subject() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      subjects: [{ subject: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "subjects",
  });
  return (
    <Box sx={{ p: "1rem" }}>
      <Typography variant="subtitle2" sx={{ pb: "1rem" }}
      >Assunto</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {fields.map((subject, index) => (
          <Box key={subject.id} sx={{ display: "flex", gap: "1rem" }}>
            <ThesarusBK />
            <IconButton onClick={() => remove(index)}>
              <RemoveIcon />
            </IconButton>
          </Box>
        ))}
        <Button
          onClick={() => {
            append({ subject: "" });
          }}
        >
          Adicionar Assunto
        </Button>
      </Box>
    </Box>
  );
}
