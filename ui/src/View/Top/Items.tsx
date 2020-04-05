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
    minHeight: "300px",
    filter: "drop-shadow(0 1mm 0.1rem Gray)",
  },
  headphoneImage: {
    margin: theme.spacing(2, 1),
    maxWidth: "90%",
    maxHeight: "150px",
    border: "1px solid LightGray",
    borderRadius: "40px",
  },
  price: {
    margin: theme.spacing(1, 4),
  },
  buyNowBtn: {
    margin: theme.spacing(1, 4),
    color: "#fff",
    background: "#EC9C01",
  },
  buyNowBtnContent: {
    display: "inline",
    verticalAlign: "middle",
  },
  salesPoint: {
    margin: theme.spacing(1, 0),
    padding: theme.spacing(1, 0),
  },
  itemImage: {
    display: "inline-block",
    verticalAlign: "middle",
  },
  amazonBestSallerBlock: {
    position: "relative",
    zIndex: 100,
    top: "18px",
    left: "-33%",
    filter: "drop-shadow(0 1.5mm 0.1rem LightGray)",
  },
  amazonBestSaller: {
    height: "37px",
  },
}));

export const Items = (): JSX.Element => {
  const items: Item[] = [
    {
      url: "https://amzn.to/2X9Bce8",
      imgPath: "/img/ag.jpg",
      price: 4000,
      salesPoints: ["msg1", "msg2", "msg3"],
    },
    {
      url: "https://amzn.to/2UJHkbq",
      imgPath: "/img/sony.png",
      price: 30000,
      salesPoints: ["msg1", "msg2", "msg3"],
    },
  ];

  return (
    <Box mt={3}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={11} sm={6}>
          <ItemView {...items[0]} />
        </Grid>
        <Grid item xs={11} sm={6}>
          <ItemView {...items[1]} />
        </Grid>
      </Grid>
    </Box>
  );
};

interface Item {
  url: string;
  imgPath: string;
  price: number;
  salesPoints: string[];
}

const ItemView = (props: Item): JSX.Element => {
  const c = useStyle();
  return (
    <div>
      <div className={c.amazonBestSallerBlock}>
        <img
          src={"/img/amazon_best_saller.png"}
          alt="amazon-best-saller"
          className={c.amazonBestSaller}
        />
      </div>

      <Paper className={c.paper}>
        <Grid item xs={6} className={c.itemImage}>
          <img
            src={props.imgPath}
            alt="headphoneImage"
            className={c.headphoneImage}
          />
        </Grid>
        <Grid item xs={6} className={c.itemImage}>
          <Typography variant="body1" className={c.price}>
            {`~¥${props.price}`}
          </Typography>
          <BuyNowButton url={props.url} />
        </Grid>
        <Grid item xs={12} className={c.salesPoint}>
          {props.salesPoints.map((v) => {
            return (
              <Typography variant="body2" key={v}>
                {v}
              </Typography>
            );
          })}
        </Grid>
      </Paper>
    </div>
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
