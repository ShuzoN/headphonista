import React from "react";
import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import DirectionsIcon from "@material-ui/icons/Directions";
import { displayPrice } from "../../utils/price";
import Typography from "@material-ui/core/Typography";

import red from "@material-ui/core/colors/red";
import amber from "@material-ui/core/colors/amber";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    star: {
      color: amber[400],
    },
    price: {
      color: red[500],
    },
    buyNowBtn: {
      margin: theme.spacing(1, 0),
      width: "100%",
      color: "#fff",
      background: amber[600],
    },
    buyNowBtnContent: {
      padding: theme.spacing(0, 1, 0, 0),
      display: "inline",
      verticalAlign: "middle",
    },
    productPageBtn: {
      margin: theme.spacing(1, 0),
      width: "100%",
      color: "#fff",
      background: red["A200"],
    },
    productPageBtnContent: {
      padding: theme.spacing(0, 1, 0, 0),
      display: "inline",
      verticalAlign: "middle",
    },
  })
);

export const Overview = (props: {
  reviewStars: number;
  price: number;
  amazonUrl: string;
  productPageUrl: string;
  itemName: string;
}): JSX.Element => {
  const c = useStyles();

  const StarElements = () => {
    const fullStarCount = Math.floor(props.reviewStars);
    const hasHalfStar = props.reviewStars % 1 > 0;

    const stars = [...new Array(fullStarCount)].map((_, i) => {
      return <StarIcon key={`star${i}`} className={c.star} />;
    });

    if (hasHalfStar) {
      stars.push(<StarHalfIcon key={"halfstar"} className={c.star} />);
    }

    return <>{stars}</>;
  };

  return (
    <>
      <Grid item xs={12}>
        <StarElements />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">
          プロユースの本格音質をご自宅でも手軽に。
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" className={c.price}>
          {displayPrice(props.price)}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <BuyNowButton url={props.amazonUrl} />
      </Grid>
      <Grid item xs={6}>
        <ProductPageButton url={props.productPageUrl} />
      </Grid>
    </>
  );
};

const BuyNowButton = (props: { url: string }): JSX.Element => {
  const c = useStyles();
  return (
    <Button className={c.buyNowBtn} href={props.url}>
      <ShoppingCartOutlinedIcon className={c.buyNowBtnContent} />
      <Typography variant="caption" className={c.buyNowBtnContent}>
        BUY NOW
      </Typography>
    </Button>
  );
};

const ProductPageButton = (props: { url: string }): JSX.Element => {
  const c = useStyles();
  return (
    <Button className={c.productPageBtn} href={props.url}>
      <DirectionsIcon className={c.productPageBtnContent} />
      <Typography variant="caption" className={c.productPageBtnContent}>
        公式ページ
      </Typography>
    </Button>
  );
};
