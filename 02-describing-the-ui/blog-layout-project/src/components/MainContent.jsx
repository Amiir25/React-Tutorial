import PostCard from './PostCard'

const MainContent = ({posts}) => {
  return (
    <section>
        <h1 className='text-3xl font-bold mb-10'>Featured Blogs</h1>
        <div className='grid grid-cols-3 gap-6'>
            {posts.map(post =>
                <PostCard key={post.id} post={post}/>
            )}
        </div>
    </section>
  )
}

export default MainContent