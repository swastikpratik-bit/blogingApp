import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export interface Blogg {
    author: { name: string };
    content: string;
    id: string;
    publishedData: Date;
    title: string;
}

export interface Anonymous{
  author: { name: "anonymous" };
  content: "anonymous";
  id: "anonymous";
  publishedData: "anonymous";
  title: "anonymous";
}

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blogg>();
  useEffect(() => { 
    axios
      .get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setBlogs(res.data.posts);
        setLoading(false);
      });
  }, []);
  return {
    loading,
    blogs,
  };
};


export const useBlog = ({id} : {id : string}) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blogg>();
  useEffect(() => { 
    axios
      .get(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setBlog(res.data.blog);
        setLoading(false);
      });
  }, [id]);

  return {
    loading,
    blog,
  };
};


