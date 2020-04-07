import * as React from "react";

const WAIT_FOR_RENDER = 100;

// take advantage of useCallback() to refer DOM elements
// https://ja.reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node

export const scrollRef = () =>
  // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useCallback((node: HTMLElement | null) => {
    if (node !== null && `#${node.id}` === window.location.hash) {
      window.setTimeout(() => {
        node.scrollIntoView();
      }, WAIT_FOR_RENDER);
    }
  }, []);
