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
    &:hover {
      transform: scale(1.05);
    }

  
`
