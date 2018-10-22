export default city => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://yemekx-api.herokuapp.com/regions/${
        city.key
      }`
    )
      .then(response => response.json())
      .then(response => resolve(response))
      .catch(x => reject(x));
  });
};
