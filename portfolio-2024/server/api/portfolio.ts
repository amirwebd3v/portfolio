import jsonData from '@/server/api/data/portfolio.json'

export default defineEventHandler(async (event) => {
  // Handle the API route
  if (event.node.req.url === '/api/portfolio') {
    return jsonData
  }
})
