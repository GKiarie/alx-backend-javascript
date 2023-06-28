export default function handleResponseFromAPI(promise) {
  promise
    .finally(() => {
      console.log('Got a response from the API');
    })
    .then(() => {
      const response = {
        status: 200,
        body: 'success',
      };
      return response;
    })
    .catch(() => new Error());
}
