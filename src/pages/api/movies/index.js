import { getBlogPosts } from "../../../../lib/mongo/movies"

const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const { blogPosts, error } = await getBlogPosts()
      if (error) throw new Error(error)

      return res.status(200).json({ blogPosts })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  res.setHeader('Allow', ['GET'])
  res.status(405).end(`Method ${req.method} is not allowed.`)
}

export default handler
