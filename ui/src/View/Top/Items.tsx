import React from "react";
import { Grid, Box, makeStyles, Paper } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  paper: {
    minWidth: "300px",
    minHeight: "300px",
    filter: "drop-shadow(0 1mm 0.1rem Gray)",
  },
}));

export const Items = (): JSX.Element => {
  const c = useStyle();
  return (
    <Box mt={3}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={4}
      >
        <Grid item xs={11} sm={6}>
          <Paper className={c.paper}>hoge</Paper>
        </Grid>
        <Grid item xs={11} sm={6}>
          <Paper className={c.paper}>fuga</Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
