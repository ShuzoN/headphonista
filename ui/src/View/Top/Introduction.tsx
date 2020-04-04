import React from "react";
import { makeStyles, Typography, Grid } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  introduction: {
    textShadow: "2px 2px 3px Gray;",
    margin: theme.spacing(3, 0),
  },
  introductionMessage: {
    lineHeight: "3.5",
  },
}));

export const Introduction = (): JSX.Element => {
  const c = useStyle();

  return (
    <>
      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="center"
        className={c.introduction}
      >
        <Grid item xs={12}>
          <Typography variant="body2" className={c.introductionMessage}>
            おすすめイヤホン、ヘッドホン
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className={c.introductionMessage}>
            Headphonista(ヘッドフォニスタ)は
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className={c.introductionMessage}>
            イヤホン・ヘッドホンを
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className={c.introductionMessage}>
            選べないあなたへ
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className={c.introductionMessage}>
            3クリックで最適なものを
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className={c.introductionMessage}>
            届けるために作られたサイトです
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
