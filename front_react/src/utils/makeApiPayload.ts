export const headers = { Authorization: 'Bearer ' + localStorage.getItem('token') };

interface JsonPayload {
  url: string;
  method: HttpMethod;
  payload?: any;
  headers?: { Authorization: string };
  contentType?: { type: string };
}
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export const makeApiPayload = (
  url: string,
  method: HttpMethod,
  payload?: null,
  headers?: { Authorization: string },
  contentType?: { type: string }
): JsonPayload => {
  const jsonPayload: {
    url: string;
    method: HttpMethod;
    withCredentials: boolean;
    headers: any;
    body?: any;
  } = {
    url,
    method,
    withCredentials: true,
    headers: {}
  };
  if (headers) {
  }
  if (contentType && contentType.type) {
    jsonPayload.headers['Content-Type'] = contentType.type;
  } else {
    jsonPayload.headers.Accept = 'application/json';
    jsonPayload.headers['Content-Type'] = 'application/json';
  }
  if (payload !== null) {
    switch (jsonPayload.headers['Content-Type']) {
      case 'application/json':
        jsonPayload.body = payload;
        break;
      case 'multipart/form-data':
        let formData = new FormData();
        jsonPayload.headers['Content-Type'] = `multipart/form-data;`;
        // eslint-disable-next-line no-restricted-syntax
        if (payload) {
          for (const key of Object.keys(payload)) {
            if (key === 'cv' && payload[key]) {
              formData.append('cv', payload[key][0]);
            } else if (key === 'img' && payload[key]) {
              formData.append('img', payload[key][0]);
            } else if (payload[key] !== undefined && payload[key] !== '') {
              formData.append(key, payload[key]);
            }
          }
        }
        jsonPayload.body = formData;
        break;
      default:
        jsonPayload.body = null;
    }
  }
  return jsonPayload;
};
