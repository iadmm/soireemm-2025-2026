function speakers(collectionApi) {
  return collectionApi.getFilteredByGlob("./src/content/speakers/*.md");
}

export { speakers };
