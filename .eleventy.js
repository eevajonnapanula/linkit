module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('assets')

  eleventyConfig.addLiquidShortcode('type', function (type) {
    switch (type) {
      case 'blog':
        return 'Blogipostaus'
      case 'video':
        return 'Video'
      case 'event':
        return 'Tapahtuma'
      case 'shop':
        return 'Kauppa'
      case 'adventcalendar':
        return 'Joulukalenteri'
      default:
        return 'Muu'
    }
  })
}
