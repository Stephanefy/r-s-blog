import styled from '@emotion/styled';
import {PortableText, PortableTextComponents} from '@portabletext/react'
import groq from 'groq'
import { GetStaticPropsContext, InferGetStaticPropsType, GetStaticPaths } from "next";
import client from '../client'



const Container = styled.div`
max-width: 1150px;
min-height: 100vh;
padding: 4rem 0;
margin: auto;
flex: 1;
display: flex;
flex-direction: column;
justify-content: start;
align-items: center;
`;
const Main = styled.main `
min-height: 100vh;
padding: 4rem 0;
flex: 1;
display: flex;
flex-direction: column;
justify-content: start;
align-items: center;
`;






export default function About({ authorBio }: InferGetStaticPropsType<typeof getStaticProps>) {


    const [
        bioContainer = [] 
 ] = authorBio 


    return (
        <Container>
            <Main>
                <h1>à propos de moi</h1>
                
                <PortableText
                    value={bioContainer.bio.map(b => b)}
                />


            </Main>
        </Container>
    )
}


const query = groq`*[_type == "author"]{
    bio,
  }`
  


  export async function getStaticProps(context: GetStaticPropsContext) {
    // It's important to default the slug so that it doesn't return "undefined"
    const authorBio = await client.fetch(query)
  
    return {
      props: {
        authorBio,
      }
    }
  }