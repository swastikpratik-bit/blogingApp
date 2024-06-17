import { useParams } from "react-router-dom";
import { useBlog} from "../hooks";
import { FullBlog } from "../components/FullBlog"
import { formatDate } from "../utils";
import { BlogSkeleton } from "../components/BlogSkeleton";


const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || ""
  });

  if (loading) {
    return <div>
      <BlogSkeleton/>
    </div>
  }
  return (
    <div>
      <FullBlog
      // @ts-ignore
      id = {blog.id} key={blog.id} authorName={blog.author.name} title={blog.title} content={blog.content} publishedDate={formatDate(blog.publishedData)}/>
    </div>
  )
}

export default Blog;