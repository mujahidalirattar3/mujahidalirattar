const getImgUrl = (name) => {
  return new URL(`../assets/images/projects/${name}`, import.meta.url);
};

export default getImgUrl;
