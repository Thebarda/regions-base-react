import * as React from "react";

const useRenderCounter = () => {
  const renderCounter = React.useRef<number>(1);

  React.useEffect(() => {
    renderCounter.current += 1;
  });

  return renderCounter.current;
};

export default useRenderCounter;
