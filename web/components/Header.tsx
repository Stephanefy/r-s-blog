/* eslint-disable react/no-unescaped-entities */
import {useState} from "react";
import Link from "next/link";
import styled from '@emotion/styled';
import useWindowDimensions from '../hooks/useWindowDimension';

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
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const HeaderNav = styled.header`
    display: flex;
    justify-content: center;
    margin: auto;
    @media only screen and (max-width: 1170px) {
      max-width: 700px;
      justify-content: space-between;
      align-items: center;
      padding:0 2em;

    }
`

const NavBar = styled.nav<NavBar>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav-item {
      margin-left: 5rem;
    }
    @media only screen and (max-width: 1170px) {
          position: fixed;
          left: -100%;
          top: 5rem;
          flex-direction: column;
          background-color: #fff;
          width: 100%;
          border-radius: 10px;
          text-align: center;
          transition: 0.2s;
          box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
          left: ${props => props.windowWidth < 1170 && props.isOpen && 0 };

        
          .nav-item {
                margin: ${props => props.windowWidth < 1170 && props.isOpen && "2.5rem 0" };
          }
      }
`

const ListItem = styled.li`
    list-style-type: none;
    cursor: pointer;
    font-size: 1.5em;
    margin-left: 5rem;
    &:hover {
        text-decoration: underline;
    }
`
const Hamburger = styled.div<HamburgerIsActive>`
    display: none;
    opacity: ${props => props.windowWidth  > 1170 ? 0 : 1};
    @media only screen and (max-width: 1170px) {
      display: block;
      cursor: pointer;

      & :nth-of-type(2) {
        opacity: ${props => props.isOpen && 0};
      }
      & :nth-of-type(1) {
          transform: ${props => props.isOpen && 'translateY(8px) rotate(45deg)'};
      }

      & :nth-of-type(3) {
          transform: ${props => props.isOpen && 'translateY(-8px) rotate(-45deg)'};
      }
    }  

`

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
    { name: "ホーム", 
     path: "/" 
    },
    {
      name: "à propos de moi",
      path: "/about",
    },
    {
      name: "Voyages",
      path: "/travel",
    },
    // {
    //   name: "Blog",
    //   path: "/blog",
    // },
    {
      name: "Contact",
      path: "#contact",
    },
  ];


export default function Header() {

  const { width, height } = useWindowDimensions()

  const [isOpen, setIsOpen] = useState(false)

  return (
    <HeaderNav>
      <div className="brand" style={{cursor:'pointer'}}>
        <Link href="/">
          <h2>Lilly's blog</h2>
        </Link>
      </div>
      <NavBar 
        className="nav-menu"
        windowWidth={width ? width : 0}
        isOpen={isOpen}
        >
        {navLinks.map((link, index) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <ul>
              <Link href={link.path} passHref>
                <ListItem key={index} className="nav-item">{link.name}</ListItem>
              </Link>
            </ul>
          );
        })}
      </NavBar>
      <Hamburger 
        id="hamburger" 
        windowWidth={width ? width : 0} 
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        >
        <Bar className="bar"/>
        <Bar className="bar"/>
        <Bar className="bar"/>
      </Hamburger>
    </HeaderNav>
  );
}