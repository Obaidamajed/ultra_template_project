import styled from "styled-components"; // بدي أحول السي أس أس الى ستايل كومبوننت 
import { Link } from "react-router-dom";

/*
    ===============================
            Navbar Styles
    ===============================
*/
export const NavbarSection = styled.div`
    padding: 5px 0;
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #000

    @media (min-width : 992px) {
              display: none
        }
      
`

export const Logo = styled.div`
    width: 50%;
    float: left;

    @media (max-width : 991px) {
          width: 100%;
          float: none;
      }
`

export const LogoText = styled.h2`
    font-size: 30px;
    font-weight: bold
`

export const UlList = styled.ul`
    width: 50%;
    float: left;
    list-style: none;
    padding: 0;

    @media (max-width : 991px) {
      width: 100%;
      float:  none;
      margin-top: 20px;
      display: none
  }
`

export const ListItem = styled.li`
    display: inline-block;

    @media (max-width : 991px) {
      display: block;
      text-align: center;
  }
`

export const Anchor = styled.a`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;

    &:hover {
      color: #eb5424
    }
    &:hover {
      cursor: pointer
    }
    // @media (min-width : 391px) {
    //   font-weight: none;
    //   font-size: 10px;
    //   display: inline
    //     }
`
export const Transport = styled(Link)`
display: block;
color: #222;
text-decoration: none;
padding: 10px 15px;
font-weight: bold;

&:hover {
  color: #eb5424
}
&:hover {
  cursor: pointer
}
// @media (min-width : 591px) {
//   font-weight: none;
//   font-size: 10px;
//   display: inline
//     }
`

/* Media for Navbar Style */ 

// @media (min-width : 992px) {
//   .navbar label {
//       display: none
//   }
// }

// @media (max-width : 991px) {
//   .navbar .logo {
//       width: 100%;
//       float: none;
//   }
  
//   .navbar .ul-list {
//       width: 100%;
//       float:  none;
//       margin-top: 20px;
//       display: none
//   }
  
//   .navbar .ul-list .list-item {
//       display: block;
//       text-align: center;
//   }
// }
