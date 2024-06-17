import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { BlogsSkeleton } from "../components/BlogsSkeleton";
import { useBlogs } from "../hooks";
import { formatDate } from "../utils";

const Blogs = () => {

  const { loading, blogs } = useBlogs();
  // console.log(blogs);

  if (loading) {
    return <div>
      <BlogsSkeleton/>
    </div>
  }

 
  return (
    <div>
      <div >
      <AppBar/>
      </div>
      <div className="flex justify-center ">
        <div className="w-full lg:w-[60vw] px-4">
          {
            // @ts-ignore
            blogs.map(blog => <BlogCard
              id = {blog.id}
              key={blog.id}
              authorName={blog.author.name}  
              title={blog.title}
              content={blog.content}
              publishedDate={formatDate(blog.publishedData)}
            />)
          }
        </div>
      </div>
    </div>
  )
}

export default Blogs; 