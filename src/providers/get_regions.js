export default city => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://us-central1-yemeksepetix-api.cloudfunctions.net/app/regions/${
        city.key
      }`
    )
      .then(response => response.json())
      .then(response => resolve(response))
      .catch(x => reject(x));
  });
};
