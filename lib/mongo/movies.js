import clientPromise from ".";

let client
let db
let blogPosts 

async function init() {
  if (db) return
  try {
    client = await clientPromise
    db = await client.db()
    blogPosts = await db.collection('blog-posts')
  } catch (error) {
    throw new Error('Failed to establish connection to database')
  }
}

;(async () => {
  await init()
})()

export async function getBlogPosts() {
  try {
    if (!blogPosts) await init()
    let result = await blogPosts
      .find({})
      .limit(1)
      .map(user => ({  _id: user._id.toString() }))
      .toArray()
      console.log("Here we are")

    return { blogPosts: result }
  } catch (error) {
    return {error: 'Failed to fetch blog posts!'}
  }
}

