module.exports = {
  publicPath: "/product_thumbnails/",
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/style/variables.scss";`
      }
    }
  }
};
