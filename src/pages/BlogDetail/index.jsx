import React from "react";

import Layout from "../../components/Layout";
import { useQuery } from "@tanstack/react-query";
import { blogService } from "../../services/blog.service";
import { Link, useParams } from "react-router-dom";
import Loading from "../../components/Loading";

export default function BlogDetail(){
    const { data, isLoading, refetch } = useQuery(
        ["blog"],
        () => blogService.fetchBlogBySlug(slug),
        {
          retry: 3,
          retryDelay: 1000,
        }
      );
      const { data: titleBlog } = useQuery(
        ["allBlogs"],
        () => blogService.fetchAllBlogs(slug),
        {
          retry: 3,
          retryDelay: 1000,
        }
      );
}