import * as React from "react";

import { RegionsContext, useRegionListing } from "./Context";
import SearchRegion from "./SearchRegion";
import Listing from "./Listing";

export default function App() {
  const regionsListingProps = useRegionListing();
  return (
    <RegionsContext.Provider value={regionsListingProps}>
      <SearchRegion />
      <Listing />
    </RegionsContext.Provider>
  );
}
