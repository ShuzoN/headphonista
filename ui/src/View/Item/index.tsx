import React from "react";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Summary } from "./Summary";
import ItemBreadcrumbs from "./ItemBreadcrumbs";
import Typography from "@material-ui/core/Typography";
import { Divider, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
  const reviewStars = 4.5;
  const price = 30000;
  const amazonUrl = "https://amzn.to/2YHPkLo";
  const productPageUrl = "https://www.sony.jp/headphone/products/MDR-M1ST/";
  const itemName = "SONY MDR-M1ST";

  return (
    <>
      <ItemBreadcrumbs itemName={itemName} />
      <div className={c.item}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" align="left">
              {itemName}
            </Typography>
            <Divider classes={{ root: c.divider }} />
          </Grid>
          <Summary
            reviewStars={reviewStars}
            price={price}
            amazonUrl={amazonUrl}
            productPageUrl={productPageUrl}
            itemName={itemName}
          />
        </Grid>
      </div>
    </>
  );
};
