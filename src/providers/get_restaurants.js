export default (city, region) => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://yemekx-api.herokuapp.com/restaurants/${
        city.key
      }/${region.key}`
    )
      .then(response => response.json())
      .then(response => resolve(response))
      .catch(x => reject(x));
  });
};
