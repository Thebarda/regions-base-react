import axios from "axios";
import { useSetRecoilState } from "recoil";
import * as React from "react";

import useRequest from "./useRequest";
import { regionsState } from "./atoms";

export interface Region {
  nom: string;
  code: string;
}

const buildRequest = (params?: string) => {
  const parameters = `?fields=nom,code${params ? `&nom=${params}` : ""}`;
  return axios.get(`https://geo.api.gouv.fr/regions${parameters}`) as Promise<
    Array<Region>
  >;
};

interface UseRegionListingProps {
  sending: boolean;
  requestRegions: (search) => void;
}

export const useRegionListing = (): UseRegionListingProps => {
  const { sendRequest, sending } = useRequest<Array<Region>>({
    request: buildRequest
  });
  const setRegions = useSetRecoilState(regionsState);

  const requestRegions = (search) => {
    sendRequest(search).then(({ data }) => {
      setRegions(data);
    });
  };

  return {
    sending,
    requestRegions
  };
};

export const RegionsContext = React.createContext<
  UseRegionListingProps | undefined
>(undefined);

export const useListingRegionsContext = () =>
  React.useContext<UseRegionListingProps>(
    RegionsContext as React.Context<UseRegionListingProps>
  );
