import React, { PureComponent } from "react";
import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import DirectionsIcon from "@material-ui/icons/Directions";
import { displayPrice } from "../../utils/price";
import Typography from "@material-ui/core/Typography";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

import red from "@material-ui/core/colors/red";
import amber from "@material-ui/core/colors/amber";
import lightBlue from "@material-ui/core/colors/lightBlue";

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
      "&:hover": {
        backgroundColor: amber["700"],
        color: "#FFF",
      },
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
      "&:hover": {
        backgroundColor: red["600"],
        color: "#FFF",
      },
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
      <Grid item xs={6} sm={3}>
        <BuyNowButton url={props.amazonUrl} />
      </Grid>
      <Grid item xs={6} sm={3}>
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

const resolution: number = 95;
const redution: number = 70;
const quality: number = 90;
const comfortable: number = 80;
const soundField: number = 70;
const portability: number = 40;

export const chartData: ChartData[] = createChartData(
  resolution,
  redution,
  quality,
  comfortable,
  soundField,
  portability
);

function createChartData(
  resolution: number,
  redution: number,
  quality: number,
  comfortable: number,
  soundField: number,
  portability: number
) {
  const createElement = (subject: string, value: number): ChartData => {
    return {
      subject: subject,
      A: value,
      B: value,
      fullMark: 150,
    };
  };

  return [
    createElement("細やかさ", resolution),
    createElement("遮音性", redution),
    createElement("音質", quality),
    createElement("つけ心地", comfortable),
    createElement("音場の広さ", soundField),
    createElement("携帯性", portability),
  ];
}

type ChartData = {
  subject: string;
  A: number;
  B: number;
  fullMark: number;
};

export const ItemRadarChart = (props: {
  name: string;
  data: ChartData[];
}): JSX.Element => {
  return (
    <RadarChart
      cx={175}
      cy={150}
      outerRadius={100}
      width={400}
      height={400}
      data={props.data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <Radar
        name={props.name}
        dataKey="A"
        stroke={lightBlue["200"]}
        fill={lightBlue["100"]}
        fillOpacity={0.6}
      />
    </RadarChart>
  );
};
