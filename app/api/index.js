// General api to access data
import ApiConstants from './ApiConstants';
export default async function api() {
  let options;
  options = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  return fetch(ApiConstants.FETCH_DATA)
    .then(resp => resp.json())
    .then(json => json)
    .catch(error => error);
}
