module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('assets')

  eleventyConfig.addLiquidShortcode('type', function (type) {
    switch (type) {
      case 'blog':
        return 'Blogipostaus'
      case 'video':
        return 'Video'
      default:
        return 'Muu'
    }
  })
}
