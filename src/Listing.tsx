import * as React from "react";
import { useRecoilValue } from "recoil";
import { regionsNumberSelector, regionsState } from "./atoms";
import { useListingRegionsContext } from "./Context";
import useRenderCounter from "./useRenderCounter";

const ListingContent = ({ requestRegions }) => {
  const regions = useRecoilValue(regionsState);
  const regionsNumber = useRecoilValue(regionsNumberSelector);
  const renderCounter = useRenderCounter();

  React.useEffect(() => {
    requestRegions();
  }, []);

  return (
    <div>
      <ul>
        {regions.map(({ nom, code }) => (
          <li key={code.toString()}>{nom}</li>
        ))}
      </ul>
      <p>Total: {regionsNumber} </p>
      <p>Render counter: {renderCounter}</p>
    </div>
  );
};

const Listing = () => {
  const { requestRegions } = useListingRegionsContext();

  return React.useMemo(
    () => <ListingContent requestRegions={requestRegions} />,
    []
  );
};

export default Listing;
