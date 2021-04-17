import * as React from "react";

export interface RequestParams<TResult> {
  request: (params?: string) => Promise<TResult>;
}

export interface RequestResult<TResult> {
  sendRequest: (params?: string) => Promise<TResult>;
  sending: boolean;
}

const useRequest = <TResult>({
  request
}: RequestParams<TResult>): RequestResult<TResult> => {
  const [sending, setSending] = React.useState(false);

  const sendRequest = (params?: string): Promise<TResult> => {
    setSending(true);

    return request(params)
      .then((data) => {
        return data;
      })
      .finally(() => setSending(false));
  };

  return { sendRequest, sending };
};

export default useRequest;
