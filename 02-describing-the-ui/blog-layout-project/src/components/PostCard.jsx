import { Star } from 'lucide-react';

const PostCard = ({post}) => {
  return (
    <div className={`relative p-2 rounded bg-gray-200 border
    ${post.isFeatured ? 'border-amber-600' : 'border-gray-800'}`}>
        
        {post.isFeatured &&
            <p className='absolute top-0 right-0 bg-amber-600 text-white px-1'>
                Featured
            </p>}
        
        <h1 className='text-xl font-semibold text-gray-800 max-w-52'>
            {post.title}
        </h1>
        <h3>by <span className='font-bold'>{post.author}</span></h3>
        <p className='mt-6'>{post.excerpt}</p>
        <button className='mt-4 bg-gray-900 text-white px-6 py-1 rounded'>
            Read
        </button>
    </div>
  )
}

export default PostCard