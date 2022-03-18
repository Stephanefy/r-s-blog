import styled from "@emotion/styled";
import { devices } from '../utils/devices';


export const IndexHeaderImg = styled.img`
    width: 100%;
    object-fit: cover;
    margin: 0 2em;

    @media ${devices.mobileS} {
        padding: 0 2em;
    }
`