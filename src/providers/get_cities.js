export default () => {
  return new Promise((resolve, reject) => {
    fetch("https://yemekx-api.herokuapp.com/cities")
      .then(response => response.json())
      .then(response => resolve(response))
      .catch(x => reject(x));
  });
};
