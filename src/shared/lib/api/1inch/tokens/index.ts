import { AxiosResponse } from "axios";

import { axios1inch } from "../base";
import { GetTokensByChainIdResponse } from "./types";
import { urls } from "./urls";

export const getTokensByChainId = async (chainId: string): Promise<AxiosResponse<GetTokensByChainIdResponse>> =>
  axios1inch.get(urls.tokens(chainId));
