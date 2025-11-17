// import collections
import { speakers } from "./src/_11ty/collections/speakers.js";

// import filters
import { dateMachine, dateNumeric, dateFull } from "./src/_11ty/filters/dates.js";

/**
 * Export configuration (API)
 * @param {*} eleventyConfig
 */
export default async function (eleventyConfig) {
  // collections
  eleventyConfig.addCollection("speakers", speakers);

  // filters
  eleventyConfig.addFilter("dateMachine", dateMachine);
  eleventyConfig.addFilter("dateNumeric", dateNumeric);
  eleventyConfig.addFilter("dateFull", dateFull);

  // ignore and don't watch assets
  eleventyConfig.ignores.add("./src/assets/**/*");
  eleventyConfig.watchIgnores.add("./src/assets/**/*");

  // copy files
  eleventyConfig.addPassthroughCopy("./src/assets/img");
  eleventyConfig.addPassthroughCopy("./src/assets/fonts");
  eleventyConfig.addPassthroughCopy({ "./src/static": "/" });

  // server options
  eleventyConfig.setServerOptions({
    port: 3000,
    watch: ["./dist/assets/css/**/*", "./dist/assets/js/**/*"],
  });
}

/**
 * Export basic config
 */
export const config = {
  dir: {
    input: "./src",
    output: "./dist",
    includes: "_includes",
    data: "_data",
  },
  templateFormats: ["njk", "md"],
  markdownTemplateEngine: "njk",
};
