import React from 'react'
import Header from './components/Header'
import Layout from './components/Layout'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent';

// Header Links
const navLinks = ["Home", "Categories", "About", "Newsletter"];

// Trending Posts
const trendingPosts = [
    {id: 1, title: "5 Ways to Reclaim Your Morning"},
    {id: 2, title: "My Minimalist Desk Setup 2026"},
    {id: 3, title: "Why Paper Journals Still Win"},
];

// Posts
const posts = [
  {
    id: 3,
    title: "Mastering the UseState Hook",
    excerpt: "State is the heart of any interactive React application. Learn how to manage it efficiently.",
    author: "Charlie",
    isFeatured: true,
  },
  {
    id: 4,
    title: "CSS Grid vs. Flexbox",
    excerpt: "Stop guessing which layout tool to use. We break down the best use cases for both.",
    author: "Diana",
    isFeatured: true,
  },
  {
    id: 5,
    title: "The Future of Server Components",
    excerpt: "Are React Server Components the end of traditional APIs? Let's explore the shift.",
    author: "Alice",
    isFeatured: false,
  },
  {
    id: 6,
    title: "Optimizing Image Performance",
    excerpt: "Slow loading times kill conversion rates. Here is how to keep your assets lean.",
    author: "Edward",
    isFeatured: false,
  },
  {
    id: 7,
    title: "A Guide to Clean Code",
    excerpt: "Code is read more often than it is written. Make sure yours tells a clear story.",
    author: "Fiona",
    isFeatured: false,
  },
  {
    id: 8,
    title: "Dark Mode in 5 Minutes",
    excerpt: "Implementing a system-aware dark mode using CSS variables and a tiny bit of JS.",
    author: "Bob",
    isFeatured: true,
  },
  {
    id: 9,
    title: "Accessibility Matters",
    excerpt: "Web development is for everyone. Ensure your blog is navigable for all users.",
    author: "George",
    isFeatured: false,
  },
  {
    id: 10,
    title: "Deployment Strategies",
    excerpt: "From Vercel to Netlify, choosing the right hosting for your static site.",
    author: "Diana",
    isFeatured: false,
  },
  {
    id: 11,
    title: "Why I Switched to TypeScript",
    excerpt: "The initial learning curve was steep, but the lack of runtime errors made it worth it.",
    author: "Charlie",
    isFeatured: true,
  },
  {
    id: 12,
    title: "Handling Forms without Tears",
    excerpt: "Validation, submission, and error handling don't have to be a headache.",
    author: "Edward",
    isFeatured: false,
  }
];

const App = () => {
  return (
    <div className='px-4 py-4'>
      <Header navLinks={navLinks}/>
      <Layout>
        <Sidebar trendingPosts={trendingPosts}/>
        <MainContent posts={posts} />
      </Layout>
    </div>
  )
}

export default App