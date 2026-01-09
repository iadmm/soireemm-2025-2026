function speakers(collectionApi) {
  let speakers = collectionApi
    .getFilteredByGlob("./src/content/speakers/*.md")
    .sort((a, b) => a.data.surname.localeCompare(b.data.surname, "fr", { sensitivity: "base" }));

  return speakers;
}

export { speakers };
