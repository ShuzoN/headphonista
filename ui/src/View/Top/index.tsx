import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import { Introduction } from "./Introduction";
import TrainIcon from "@material-ui/icons/Train";
import ComputerIcon from "@material-ui/icons/Computer";
import { Menus } from "../../Contract";
import { Items } from "./Items";
import { scrollRef } from "../../lib/ScrollRef";
import { Item } from "./Contract";

const useStyle = makeStyles((theme) => ({
  eyecache: {
    width: "100%",
    margin: theme.spacing(0, 0),
    filter: "drop-shadow(0 1mm 0.5rem Gray)",
  },
  introduction: {
    textShadow: "2px 2px 3px Gray;",
    margin: theme.spacing(3, 0),
  },
  introductionMessage: {
    lineHeight: "3.5",
  },
  category: {
    padding: theme.spacing(3, 0),
  },
  categoryName: {
    display: "inline",
    verticalAlign: "middle",
    margin: theme.spacing(0, 0.5),
  },
}));

export const Top = (): JSX.Element => {
  const c = useStyle();

  return (
    <>
      <div>
        <img
          src="/img/headphonista_eyecache.png"
          alt="eyecache"
          className={c.eyecache}
        />
      </div>
      <Introduction />
      <CategoryItems categoryName={Menus.Commuting} items={commutingItems} />
      <CategoryItems categoryName={Menus.Work} items={workItems} />
    </>
  );
};

const CategoryItems = (props: { categoryName: string; items: Item[] }) => {
  return (
    <>
      <CategoryTitle categoryName={props.categoryName} />
      <Items {...props.items} />
    </>
  );
};

const CategoryTitle = (props: { categoryName: string }): JSX.Element => {
  const c = useStyle();
  const chooseTitleWithIcon = (categoryName: string) => {
    switch (categoryName) {
      case Menus.Commuting:
        return (
          <div id="commuting" ref={scrollRef()} className={c.category}>
            <TrainIcon className={c.categoryName} />
            <Typography className={c.categoryName}>{categoryName}</Typography>
          </div>
        );
      case Menus.Work:
        return (
          <div id="work" ref={scrollRef()} className={c.category}>
            <ComputerIcon className={c.categoryName} />
            <Typography className={c.categoryName}>{categoryName}</Typography>
          </div>
        );

      default:
        return <></>;
    }
  };

  return <Box mt={12}>{chooseTitleWithIcon(props.categoryName)}</Box>;
};

const commutingItems: Item[] = [
  {
    name: "Apple AirPods Pro",
    url: "https://amzn.to/3de8Gwm",
    imgPath: "/img/apple_airpods_pro.jpg",
    price: 30000,
    salesPoints: [
      "アマゾンイヤホンランキング堂々の第1位",
      "強力なノイズキャンセリング性能でまるで真空",
      "iPhoneとの相性が最高近づけるだけでリンクする",
      "iPhoneと同じケーブルで充電できる",
      "実は音質もいいんです",
    ],
  },
  {
    name: "ソニー WF-1000XM3",
    url: "https://amzn.to/2BlJk2c",
    imgPath: "/img/sony_wf1000xm3.jpg",
    price: 24000,
    salesPoints: [
      "最大6時間連続再生",
      "現状イヤホン最強レベルのノイズキャンセリング性能",
      "電車やバスの騒音をカット",
      "type C対応なのも嬉しいポイント",
      "10分充電で90分使えるから通勤にも重宝",
    ],
  },
];

const workItems: Item[] = [
  {
    name: "Anker Soundcore Life P2",
    url: "https://amzn.to/30S4vnq",
    imgPath: "/img/anker_soundcore_life_p2.jpg",
    price: 5000,
    salesPoints: [
      "アマゾンイヤホンランキング2位",
      "ankerは電池の名門メーカー",
      "完全防水なので突然の雨も大丈夫",
      "満充電で7時間聴けるから集中作業も余裕",
      "音質は5000円以下なのに超クリア",
    ],
  },
  {
    name: "ag TWS04K",
    url: "https://amzn.to/2BgsIJs",
    imgPath: "/img/ag_tws04k.jpg",
    price: 15000,
    salesPoints: [
      "最大9時間まで連続再生が可能",
      "ケース込みで180時間再生とバケモノ性能",
      "type C対応+携帯の充電ができるのも嬉しいところ",
      "もちろん完全防水です(IPX7)",
      "え？1万円代でこんなに音の良いの出したらだめだって...!",
    ],
  },
];
