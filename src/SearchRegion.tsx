import * as React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { resetSearchSelector, searchState } from "./atoms";
import { useListingRegionsContext } from "./Context";
import useRenderCounter from "./useRenderCounter";

const SearchRegionContent = ({ requestRegions, sending }) => {
  const [search, setSearch] = useRecoilState(searchState);
  const setResetSearch = useSetRecoilState(resetSearchSelector);
  const renderCounter = useRenderCounter();

  return (
    <>
      <div>
        <span>Search</span>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => requestRegions(search)}>Search</button>
        <button onClick={() => setResetSearch()}>Reset</button>
        <span>{sending && "loading..."}</span>
      </div>
      <p>Render counter: {renderCounter}</p>
    </>
  );
};

const SearchRegion = () => {
  const { requestRegions, sending } = useListingRegionsContext();

  return React.useMemo(
    () => (
      <SearchRegionContent requestRegions={requestRegions} sending={sending} />
    ),
    [sending]
  );
};

export default SearchRegion;
