import React from "react";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Divider } from "@material-ui/core";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    breadcrumbs: {
      margin: theme.spacing(2, 1),
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
    item: {
      margin: theme.spacing(0, 2),
      textAlign: "left",
    },
    divider: {
      background: theme.palette.warning.main,
    },
  })
);

export const Item = (): JSX.Element => {
  const c = useStyles();

  return (
    <>
      <ItemBreadcrumbs />
      <div className={c.item}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6" align="left">
              SONY MDR-M1ST
            </Typography>
            <Divider classes={{ root: c.divider }} />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default function ItemBreadcrumbs() {
  const c = useStyles();

  return (
    <div className={c.breadcrumbs}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link color="inherit" href="/">
          <Typography variant="body2">商品一覧</Typography>
        </Link>
        <Typography color="textPrimary" variant="body2">
          SONY MDR-M1ST
        </Typography>
      </Breadcrumbs>
    </div>
  );
}
