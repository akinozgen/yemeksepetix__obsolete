export default (city, region, restaurant) => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://yemekx-api.herokuapp.com/menus/${
        city.key
      }/${region.key}${restaurant.seourl}`
    )
      .then(response => response.json())
      .then(response => resolve(response))
      .catch(x => reject(x));
  });
};
