import axios from 'axios';

export const get = <T extends Record<string, unknown>>(
  url: string,
  data: Record<string, unknown>,
  handleSuccess: (res: T) => void,
  handleFailure: (error: unknown) => void,
): void => {
  axios
    .get<T>(url, data)
    .then((res) => {
      handleSuccess(res.data);
    })
    .catch(handleFailure);
};

export const put = <T extends Record<string, unknown>>(
  url: string,
  data: Record<string, unknown>,
  handleSuccess: (res: T) => void,
  handleFailure: (error: unknown) => void,
): void => {
  axios
    .put<T>(url, data)
    .then((res) => {
      handleSuccess(res.data);
    })
    .catch(handleFailure);
};
