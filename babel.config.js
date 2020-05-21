module.exports = {
  "presets": [
    "@vue/app",
    ["@babel/preset-env", { "modules": false }]
  ],
  "plugins": [["component", // 删掉[]
    {
      "libraryName": "element-ui",
      "styleLibraryName": "theme-chalk"
    }
  ]]
}