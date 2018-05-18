export default str => {
  const mapObj = {
    "&#246;": "ö",
    "&#199;": "ç",
    "&#252;": "ü",
    "&#231;": "ç",
    "&#220;": "ü",
    "&#214;": "ö",
    "&#174;": "'",
    "&#39;": "'"
  };

  str = str
    .toLowerCase()
    .replace(
      /&#246;|&#199;|&#252;|&#231;|&#220;|&#214;|&#174;|&#39;/g,
      match => {
        return mapObj[match];
      }
    );
  return str;
};
