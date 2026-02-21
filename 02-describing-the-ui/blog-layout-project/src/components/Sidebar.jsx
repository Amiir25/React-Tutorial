const Sidebar = ({trendingPosts}) => {
  return (
    <section className='h-screen max-w-80 border-r border-gray-400'>
        {/* Img */}
        <img
        src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
        alt="Profile Image"
        className='w-24 h-24 rounded-full' />

        {/* Name & Bio */}
        <div>
            <h1 className='font-mono my-2'>John Doe</h1>
            <p>Hi, I'm John. I explore the intersection of daily habits and digital productivity.</p>
        </div>

        {/* Trending Posts */}
        <div className='mt-10'>
            <h1 className='text-xl font-semibold py-2'>Trending Posts</h1>
            <div>
                {trendingPosts.map(post => 
                    <a href="" key={post.id} className='block hover:underline cursor-pointer'>
                        {post.id}. {post.title}
                    </a>
                )}
            </div>
        </div>
    </section>
  )
}

export default Sidebar