/* const { Client } = require('@notionhq/client')

// Initializing a client
const notion = new Client({
  auth: ''
})

module.exports = async () => {
  const links = await notion.databases.query({
    database_id: 'e0234e9f246c4ff188e9d8421c117e8d',
    filter: {
      property: 'url'
    }
  })
  console.log(links.results[0].properties)
  return links.results.map(res => {
    return {
      url: res.url
    }
  })
}
 */
