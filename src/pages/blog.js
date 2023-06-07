import SideBar from './sidebar';
import { getBlogPosts } from '../../lib/mongo/movies';

export default function BlogPage({posts}) {
  return (
    <>
      <SideBar />
      <h1 className="text-4xl text-center text-bold bg-primary m-50 py-10">
        Blog Landing Page
      </h1>
      <ul className='text-center'>
        {posts.map((post) => (
          <li className="bg-secondary mt-5 hover:bg-secondary_hover" key={post._id}><h2 className='text-3xl'>{post.title}</h2>
					<br></br>
					{post.body}</li>
				
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


const createPostComponent = () => {
	return (
		<p>List of posts will live in here and get created in here</p>
	)
}