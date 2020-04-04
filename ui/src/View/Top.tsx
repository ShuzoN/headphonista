import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  eyecache: {
    width: "100%",
    margin: theme.spacing(0, 0),
    filter: "drop-shadow(0 1mm 0.5rem Gray)",
  },
}));

export const Top = (): JSX.Element => {
  const c = useStyle();

  return (
    <img
      src="/img/headphonista_eyecache.png"
      alt="eyecache"
      className={c.eyecache}
    />
  );
};
