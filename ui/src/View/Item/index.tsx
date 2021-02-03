import React from "react";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { typography } from "material-ui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    breadcrumbs: {
      margin: theme.spacing(2, 1),
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
  })
);

export const Item = (): JSX.Element => {
  return (
    <>
      <ItemBreadcrumbs />
    </>
  );
};

export default function ItemBreadcrumbs() {
  const classes = useStyles();

  return (
    <div className={classes.breadcrumbs}>
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
