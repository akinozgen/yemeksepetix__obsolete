export default () => {
  return new Promise((resolve, reject) => {
    fetch("https://us-central1-yemeksepetix-api.cloudfunctions.net/app/cities")
      .then(response => response.json())
      .then(response => resolve(response))
      .catch(x => reject(x));
  });
};
