import React from "react";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Button, Divider } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import red from "@material-ui/core/colors/red";
import amber from "@material-ui/core/colors/amber";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import DirectionsIcon from "@material-ui/icons/Directions";
import { displayPrice } from "../../utils/price";

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
        <Summary
          reviewStars={reviewStars}
          price={price}
          amazonUrl={amazonUrl}
          productPageUrl={productPageUrl}
          itemName={itemName}
        />
      </div>
    </>
  );
};

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

const Summary = (props: {
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
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h6" align="left">
          {props.itemName}
        </Typography>
        <Divider classes={{ root: c.divider }} />
      </Grid>
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
    </Grid>
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
