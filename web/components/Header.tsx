/* eslint-disable react/no-unescaped-entities */
import {useState} from "react";
import Link from "next/link";
import styled from '@emotion/styled';
import useWindowDimensions from '../hooks/useWindowDimension';
import Hamburger from 'hamburger-react'

interface HamburgerIsActive{
  windowWidth: number;
  isOpen: boolean
}

interface NavBar{
  className: string;
  windowWidth: number;
  isOpen: boolean
}
const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
const HeaderNav = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff
    margin: auto;
    width: 1200px;

    @media only screen and (max-width: 1170px) {

      position: fixed;
      width: 100%;
      background-color: #fff;
      justify-content: space-between;
      align-items: center;
      padding:0 2em;
      z-index: 99;

    }
`

const NavBar = styled.nav<NavBar>`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin: auto;


    @media only screen and (max-width: 1170px) {
          position: fixed;
          left: -100%;
          top: 1rem;
          height: 500px;
          flex-direction: column;
          background-color: #fff;
          width: 100%;
          border-radius: 10px;
          text-align: center;
          transition: 0.1s;
          left: ${props => props.windowWidth < 1170 && props.isOpen && 0 };

        
          .nav-item {
                margin: ${props => props.windowWidth < 1170 && props.isOpen && "2.5rem 0" };
          }
      }
`

const ListItem = styled.li`
    list-style-type: none;
    cursor: pointer;
    margin:0 2em;
    font-size: 1.25em;

    &:nth-of-type(2) {
        margin: 0 0 0 2em;
    }
    &:hover {
        text-decoration: underline;
    }
`
// const Hamburger = styled.div<HamburgerIsActive>`
//     display: none;
//     opacity: ${props => props.windowWidth  > 1170 ? 0 : 1};
//     @media only screen and (max-width: 1170px) {
//       display: block;
//       cursor: pointer;

//       &: nth-of-type(2) {
//         opacity: ${props => props.isOpen && 0};
//       }
//       &: nth-of-type(1) {
//           transform: ${props => props.isOpen && 'translateY(8px) rotate(45deg)'};
//       }

//       &: nth-of-type(3) {
//           transform: ${props => props.isOpen && 'translateY(-8px) rotate(-45deg)'};
//       }
//     }  

// `

const Bar = styled.span`
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: #101010;
`

const navLinks = [
    { 
     id: 1, 
     name: "ホーム", 
     path: "/" 
    },
    {
      id: 2,
      name: "à propos de moi",
      path: "/about",
    },
    // {
    //   id: 3,
    //   name: "旅行",
    //   path: "/travel",
    // },
    // {
    //   name: "Blog",
    //   path: "/blog",
    // },
    // {
    //   id:4,
    //   name: "Contact",
    //   path: "#contact",
    // },
  ];


export default function Header() {

  const { width, height } = useWindowDimensions()

  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container>
      <HeaderNav>
        <div className="brand" style={{cursor:'pointer'}}>
          <Link href="/">
            <h4>Lilly's blog</h4>
          </Link>
        </div>
        <div>
          <NavBar 
            className="nav-menu"
            windowWidth={width ? width : 0}
            isOpen={isOpen}
            >
            {navLinks.map((link, index) => {
              return (
                  <Link key={link.id} href={link.path} passHref>
                    <ListItem key={link.id} className="nav-item">{link.name}</ListItem>
                  </Link>
              );
            })}
          </NavBar>
        </div>
          { width && width < 1170 && (
            <Hamburger 
              toggled={isOpen}
              toggle={setIsOpen}
              >
            </Hamburger>
          )

        }
      </HeaderNav>
    </Container>
  );
}