import styled from "@emotion/styled";
import { devices } from '../utils/devices';


export const ArticleCard = styled.div`
    display: flex;
    width: 100%;
    heigth: 200px;
    margin: 2em 0;
    background: #fff;
    border-radius: 20px;
    transition: transform 0.3s, background 0.3s;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.275) 2px 2px 20px;
    &:hover {
      transform: scale(1.05);
    }
    img {
      border-radius: 20px 0 0 20px;

      @media ${devices.tabletMax}  {
        border-radius: 0;
        margin: 0

      }
    }

    @media ${devices.tabletMax} {
      flex-direction:  column;
      align-items:center;
      margin: 2em auto;
      width: 350px;
      
    }

  
`
