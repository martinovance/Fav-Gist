import Head from 'next/head';
import { PostCard, Categories, PostWidget } from '../Components';

const posts = [
  {title: 'React Testing', excerpt: 'Learn React Testing' },
  {title: 'React with tailwind', excerpt: 'Learn React with tailwind' },
];

export default function Home() {
  return (
    <div className="container nx-auto px-10 mb-8">
      <Head>
        <title>Fav Gist</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <PostCard key={post.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}
