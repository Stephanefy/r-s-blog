import { Article, BlogPostImage } from "@components/Article";
import { GetStaticPropsContext, InferGetStaticPropsType, GetStaticPaths } from "next";
import type { Post } from '../index';
import Head from 'next/head';
import { useEffect, useState } from "react";

export default function BlogPost( { post }: InferGetStaticPropsType<typeof getStaticProps>) {

  const {title, body} = post
  
  const [imgSrc, setImgSrc] = useState("")
 

  
  useEffect(() => {

    let random = Math.floor(Math.random() * (48 - 1) + 1)
    
    async function fetchParisPhoto() {
      const myHeaders = new Headers();
      myHeaders.append('Authorization', '563492ad6f91700001000001e23717f6d62149c9a641e2fa6ec329f6')
      let myInit: RequestInit = { method: 'GET',
                headers: myHeaders,
                mode: 'cors',
                cache: 'default' };
      const myRequest = new Request(`https://api.pexels.com/v1/search?query=Paris&per_page=${random}`,myInit);
      const data = await fetch(myRequest, myInit);
      const json = await data.json();

      setImgSrc(json.photos[Math.floor(Math.random() * (json.photos.length - 1) + 1)].src.original)
      
    } 
    
    fetchParisPhoto()
    .catch(err => console.log(err))
    
    
  },[])
  
  console.log('img',imgSrc)



  return (
    <Article>
      <Head>
        <title>{title}</title>
        <meta property='og:title' content={title} />
      </Head>
      <h1>{title}</h1>
      {imgSrc ? (
        
        <BlogPostImage src={imgSrc} alt="cute picture"/>

      ): <p>chargement...</p> }
      <p>{body}</p>
    </Article>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context;

  const emptyPost: Post = {
    title: "Post not found",
    body: "",
    id: 0,
    userId: 0,
  };

  if (!params?.id) {
    return {
      props: {
        post: emptyPost,
      },
    };
  }

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  const post: Post = await res.json();

  return {
    props: {
      post,
    },
  };
};