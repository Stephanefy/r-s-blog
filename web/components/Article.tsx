import styled from "@emotion/styled";
import { devices } from '../utils/devices';

export const Article = styled.article`
  margin: 0 auto;
  max-width: 768px;
  font-size: 1.25rem;

  @media ${devices.mobileS} {
    padding: 0 1.2em;
  }
  
`;


export const BlogPostImageContainer = styled.div`

  & img {
    width: 100%;
    height: auto;
    margin: 20px 0;

    @media ${devices.mobileS} {
      padding: 0 0.3em;
    }
  }
`