// import { GetStaticPropsContext, InferGetStaticPropsType, GetStaticPaths } from "next";
// import type { Post } from '../index';
// import Head from 'next/head';
// import { useEffect, useState } from "react";

// export default function BlogPost( { post }: InferGetStaticPropsType<typeof getStaticProps>) {

//   const {title, body} = post
  
//   const [imgSrc, setImgSrc] = useState("")
 

  
//   useEffect(() => {

//     let random = Math.floor(Math.random() * (48 - 1) + 1)
    
//     async function fetchParisPhoto() {
//       const myHeaders = new Headers();
//       myHeaders.append('Authorization', '563492ad6f91700001000001e23717f6d62149c9a641e2fa6ec329f6')
//       let myInit: RequestInit = { method: 'GET',
//                 headers: myHeaders,
//                 mode: 'cors',
//                 cache: 'default' };
//       const myRequest = new Request(`https://api.pexels.com/v1/search?query=Paris&per_page=${random}`,myInit);
//       const data = await fetch(myRequest, myInit);
//       const json = await data.json();

//       setImgSrc(json.photos[Math.floor(Math.random() * (json.photos.length - 1) + 1)].src.original)
      
//     } 
    
//     fetchParisPhoto()
//     .catch(err => console.log(err))
    
    
//   },[])
  
//   console.log('img',imgSrc)



//   return (
//     <Article>
//       <Head>
//         <title>{title}</title>
//         <meta property='og:title' content={title} />
//       </Head>
//       <h1>{title}</h1>
//       {imgSrc ? (
        
//         <BlogPostImage src={imgSrc} alt="cute picture"/>

//       ): <p>chargement...</p> }
//       <p>{body}</p>
//     </Article>
//   );
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts: Post[] = await res.json();

//   const paths = posts.map((post) => ({
//     params: { id: post.id.toString() },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const { params } = context;

//   const emptyPost: Post = {
//     title: "Post not found",
//     body: "",
//     id: 0,
//     userId: 0,
//   };

//   if (!params?.id) {
//     return {
//       props: {
//         post: emptyPost,
//       },
//     };
//   }

//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${params.id}`
//   );

//   const post: Post = await res.json();

//   return {
//     props: {
//       post,
//     },
//   };
// };
import { useState } from 'react';
import client from '../../client'
import { Article, BlogPostImageContainer } from "@components/Article";
import imageUrlBuilder from '@sanity/image-url'
import {PortableText} from '@portabletext/react'
import styled from '@emotion/styled';

import groq from 'groq'

import { GetStaticPropsContext, InferGetStaticPropsType, GetStaticPaths } from "next";
import { ParsedUrlQuery } from 'querystring'
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { BsSuitHeartFill } from 'react-icons/bs'

interface IParams extends ParsedUrlQuery {
  slug: string
}


function urlFor (source: SanityImageSource) {
  return imageUrlBuilder(client).image(source)
}


const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).quality(50).fit('max').auto('format').url()}
        />
      )
    }
  }
}


const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {

  console.log('post', post)
  const { 
    _id,
    _createdAt,
    title = 'Missing title', 
    name = 'Missing name', 
    categories, 
    authorImage,
    body = [],
    mainImage,
    likes
  } = post

  const [likesState, setLikesState] = useState(likes)
  



  console.log(body)

  const addLike = async () => {
    const { likes: newLikesState } = await fetch('/api/handle-like', {
      method: 'POST',
      body: JSON.stringify({_id})
    }).then((response) => response.json())

    setLikesState(newLikesState)
  }

  return (
    <div style={{position: 'relative'}}>
      <Article>
        <h1>{title}</h1>
        <span>By {name}</span>
        {categories && (
          <TagList>
            テーマ
            {categories.map(category => <TagLigtItem key={category}><span>{category}</span></TagLigtItem>)}
          </TagList>
        )}
        <p>{new Date(_createdAt).toLocaleDateString()}</p>
        {authorImage && (
          <div>
            <img
              style={{borderRadius:'50%'}}
              src={urlFor(authorImage)
                .width(50)
                .url()}
            />
          </div>
        )}
        <BlogPostImageContainer>
          <PortableText
            value={mainImage}
            components={ptComponents}
          />
        </BlogPostImageContainer>
        <PortableText
          value={body}
          components={ptComponents}
        />
      </Article>
      <LikesList>
        <ul>
            <LikesListItem>
                  <HeartLikeButton onClick={addLike}>
                    <BsSuitHeartFill color='red' size={30} />
                  </HeartLikeButton>{likesState}
                </LikesListItem>
        </ul>
      </LikesList>
    </div>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  _id,
  _createdAt,
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body,
  mainImage,
  likes
}`

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug: string) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params as IParams
  const post = await client.fetch(query, { slug })
  return {
    props: {
      post
    }
  }
}


// export type SinglePost = {
//   _id: number,
//   _createdAt: Date,
//   title : string, 
//   name :string, 
//   categories : string[],
//   authorImage: string,
//   body : any,
//   mainImage: any,
//   likes: number
// }


export default Post



const likesListWrapper = styled.div`
  display: flex;
`


const TagList = styled.ul`
  margin: 1.3em 0;
  padding: 0;
`

const TagLigtItem = styled.li`
  list-style-type: none;

`



const LikesList = styled.aside`
  position:fixed;
  width: 300px;
  height: 600px;
  right: 5%;
  bottom: 0;
`

const LikesListItem = styled.li`
  list-style: none;
`

const HeartLikeButton = styled.button`
  background: transparent;
  border:none;
  transition: transform 0.3s, background 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`