// import SideBar from './sidebar';
// import { getBlogPosts } from '../../lib/mongo/movies';

// async function fetchPosts() {
// 	const posts = await getBlogPosts()
// 	if (!posts) throw new Error('Failed to fetch blog posts')
	
// 	return posts
// }

// export async function BlogLandingPage() {
// 	const { blogPosts } = await fetchPosts()

// 	return (
// 		<>
// 			<SideBar />
// 			<h1 className='text-4xl text-center text-bold bg-primary m-50 py-10'>
// 				Blog Landing Page
// 			</h1>
// 			<ul>
// 				{blogPosts.map((post) => (
// 					<li key={post._id}>{post.body}</li>
// 				))}
// 			</ul>
// 		</>
// 	);
// }

import SideBar from './sidebar';
import { getBlogPosts } from '../../lib/mongo/movies';

export default function BlogPage({posts}) {
  return (
    <>
      <SideBar />
      <h1 className="text-4xl text-center text-bold bg-primary m-50 py-10">
        Blog Landing Page
      </h1>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>{post.body}</li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const { blogPosts } = await getBlogPosts();

  return {
    props: {
      posts: blogPosts,
    },
  };
}
