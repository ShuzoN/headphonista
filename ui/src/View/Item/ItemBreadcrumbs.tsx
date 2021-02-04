import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

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

export default function ItemBreadcrumbs(props: { itemName: string }) {
  const c = useStyles();

  return (
    <div className={c.breadcrumbs}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link color="inherit" href="/">
          <Typography variant="body2">商品一覧</Typography>
        </Link>
        <Typography color="textPrimary" variant="body2">
          {props.itemName}
        </Typography>
      </Breadcrumbs>
    </div>
  );
}
