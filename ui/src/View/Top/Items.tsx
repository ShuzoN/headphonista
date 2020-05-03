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
import { Item } from "./Contract";

const useStyle = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(2, 1),
    minWidth: "280px",
    minHeight: "280px",
    filter: "drop-shadow(0 1mm 0.1rem Gray)",
  },
  headphoneImage: {
    margin: theme.spacing(4, 1, 1),
    maxWidth: "146px",
    maxHeight: "146px",
    border: "1px solid LightGray",
    borderRadius: "40px",
  },
  price: {
    margin: theme.spacing(1, 4),
    color: "gray",
  },
  buyNowBtn: {
    margin: theme.spacing(1, 3),
    color: "#fff",
    background: "#FFB21E",
  },
  buyNowBtnContent: {
    display: "inline",
    verticalAlign: "middle",
  },
  salesPoint: {
    margin: theme.spacing(3, 0),
    padding: theme.spacing(1, 0),
  },
  salesPointText: {
    fontFeatureSettings: "palt",
    lineHeight: "2.5rem",
  },
  itemImage: {
    display: "inline-block",
    verticalAlign: "middle",
    width: "148px",
    height: "148px",
  },
  itemName: {
    margin: theme.spacing(4, 0, 0),
    display: "inline-block",
    verticalAlign: "middle",
    width: "148px",
    height: "148px",
  },
  amazonBestSallerBlock: {
    position: "absolute",
    zIndex: 100,
    top: "-10px",
    left: "-5px",
    filter: "drop-shadow(0 1.5mm 0.1rem LightGray)",
  },
  amazonBestSaller: {
    height: "37px",
  },
}));

export const Items = (items: Item[]): JSX.Element => {
  return (
    <Box mt={3}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={11} sm={6}>
          <AmazonItemView {...items[0]} />
        </Grid>
        <Grid item xs={11} sm={6}>
          <ShuzonItemView {...items[1]} />
        </Grid>
      </Grid>
    </Box>
  );
};

const AmazonItemView = (props: Item): JSX.Element => {
  const c = useStyle();
  return (
    <Paper className={c.paper}>
      <div className={c.amazonBestSallerBlock}>
        <img
          src={"/img/amazon_best_saller.png"}
          alt="amazon-best-saller"
          className={c.amazonBestSaller}
        />
      </div>
      <Grid item xs={6} className={c.itemImage}>
        <img
          src={props.imgPath}
          alt="headphoneImage"
          className={c.headphoneImage}
        />
      </Grid>
      <Grid item xs={6} className={c.itemName}>
        <Typography variant="subtitle1">{props.name}</Typography>
        <Typography variant="h5" className={c.price}>
          {`~¥${props.price}`}
        </Typography>
        <BuyNowButton url={props.url} />
      </Grid>
      <Grid item xs={12} className={c.salesPoint}>
        {props.salesPoints.map((v) => {
          return (
            <Typography variant="body1" key={v} className={c.salesPointText}>
              {v}
            </Typography>
          );
        })}
      </Grid>
    </Paper>
  );
};

const ShuzonItemView = (props: Item): JSX.Element => {
  const c = useStyle();
  return (
    <Paper className={c.paper}>
      <div className={c.amazonBestSallerBlock}>
        <img
          src={"/img/shuzon_choise.png"}
          alt="amazon-best-saller"
          className={c.amazonBestSaller}
        />
      </div>
      <Grid item xs={6} className={c.itemImage}>
        <img
          src={props.imgPath}
          alt="headphoneImage"
          className={c.headphoneImage}
        />
      </Grid>
      <Grid item xs={6} className={c.itemName}>
        <Typography variant="subtitle1">{props.name}</Typography>
        <Typography variant="h5" className={c.price}>
          {`~¥${props.price}`}
        </Typography>
        <BuyNowButton url={props.url} />
      </Grid>
      <Grid item xs={12} className={c.salesPoint}>
        {props.salesPoints.map((v) => {
          return (
            <Typography variant="body1" key={v} className={c.salesPointText}>
              {v}
            </Typography>
          );
        })}
      </Grid>
    </Paper>
  );
};

const BuyNowButton = (props: { url: string }): JSX.Element => {
  const c = useStyle();
  return (
    <Button className={c.buyNowBtn} href={props.url}>
      <ShoppingCartOutlinedIcon className={c.buyNowBtnContent} />
      <Typography variant="caption" className={c.buyNowBtnContent}>
        BUY NOW
      </Typography>
    </Button>
  );
};
