import React from "react";
import {
  Grid,
  Box,
  makeStyles,
  Paper,
  Typography,
  Button,
} from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const useStyle = makeStyles((theme) => ({
  paper: {
    minWidth: "300px",
    minHeight: "350px",
    filter: "drop-shadow(0 1mm 0.1rem Gray)",
  },
  headphoneImage: {
    margin: theme.spacing(1, 1),
    maxWidth: "90%",
    maxHeight: "200px",
    border: "1px solid LightGray",
    borderRadius: "40px",
  },
  price: {
    display: "inline",
    margin: theme.spacing(1, 4),
  },
  buyNowBtn: {
    display: "inline",
    margin: theme.spacing(1, 4),
    color: "#fff",
    background: "#EC9C01",
  },
  buyNowBtnContent: {
    display: "inline",
    margin: theme.spacing(0, 0.5),
    pading: theme.spacing(0, 1),
    verticalAlign: "middle",
  },
  salesPoint: {
    margin: theme.spacing(1, 0),
    padding: theme.spacing(1, 0),
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
        spacing={1}
      >
        <Grid item xs={11} sm={6}>
          <Paper className={c.paper}>hoge</Paper>
        </Grid>
        <Grid item xs={11} sm={6}>
          <Paper className={c.paper}>
            <Grid item xs={12}>
              <img
                src="/img/aviot.png"
                alt="headphoneImage"
                className={c.headphoneImage}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" className={c.price}>
                ~¥3000
              </Typography>
              <Button className={c.buyNowBtn}>
                <ShoppingCartOutlinedIcon className={c.buyNowBtnContent} />
                <Typography variant="caption" className={c.buyNowBtnContent}>
                  BUY NOW
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={12} className={c.salesPoint}>
              {["message", "m2", "m3"].map((v) => {
                return (
                  <Typography variant="body2" key={v}>
                    {v}
                  </Typography>
                );
              })}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
