export default (city, region, restaurant) => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://us-central1-yemeksepetix-api.cloudfunctions.net/app/menus/${
        city.key
      }/${region.key}${restaurant.seourl}`
    )
      .then(response => response.json())
      .then(response => resolve(response))
      .catch(x => reject(x));
  });
};
