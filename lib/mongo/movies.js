import clientPromise from ".";

let blogPosts;

async function init() {
  if (blogPosts) return;
  try {
    const client = await clientPromise;
    const db = client.db();
    blogPosts = db.collection('blog-posts');
  } catch (error) {
    throw new Error('Failed to establish connection to the database');
  }
}

(async () => {
  await init();
})();

export async function getBlogPosts() {
  try {
    if (!blogPosts) await init();

    const result = await blogPosts.find({}).toArray();
    const formattedResult = result.map(post => ({
      ...post,
      _id: post._id.toString(),
    }));

    return { blogPosts: formattedResult };
  } catch (error) {
    console.error('Failed to fetch blog posts:', error);
    return { error: 'Failed to fetch blog posts!' };
  }
}