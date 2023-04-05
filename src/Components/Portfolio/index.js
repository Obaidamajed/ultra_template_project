import axios from "axios";
import React, { useState, useEffect } from "react"; // { useState } هاي اللي بتمكني من استخدام طريقة الهوكس
// useEffect نفس فكرة الكومبوننت ديد ماونت في الكلاس فنكشن
import { PortfolioSection, PortfolioTitle, PortfolioList, PortfolioItem, Span, Overlay, OverlaySpan, ImageWrapper, Image } from "./style.js"

const Portfolio = () => { // الفنكشن كومبوننت ما فيها رندر

  const [ images , setImages] = useState([]) // حطيت الإيميجيس بأرراي فاضية, بعدلها من خلال السيت إيميجيس
  // setImages هاي كأنها هي الستايت
  // images وهاي كأنها الكاي اللي بداخل الستايت واللي بعدلها من خلال السيت إيميجيس

  useEffect ( () => {
    axios.get('js/data.json').then(res => { setImages(res.data.portfolio)}) // كل داتا البورت فوليو حيحطها بمتغير الإيميجيس اللي بلاين 8 
  }, []) // عملت الحركة هاي حتى ما يفوت بإينفينيتيف لوب وحتى يشتغل مرة وحدة فقط 

  const PortfolioImages = images.map( (imageItem) => {
    return (
      <ImageWrapper key={imageItem.id}>
              <Image src={imageItem.image} alt=""/>
              <Overlay>
                  <OverlaySpan>
                      Show Image
                  </OverlaySpan>
              </Overlay>
          </ImageWrapper>
    )
  })

  return (
    <PortfolioSection id="Portfolioo">
      <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
      <PortfolioList>
          <PortfolioItem active>All</PortfolioItem>
          <PortfolioItem>HTML</PortfolioItem>
          <PortfolioItem>Photoshop</PortfolioItem>
          <PortfolioItem>Wordpress</PortfolioItem>
          <PortfolioItem>Mobile</PortfolioItem>
      </PortfolioList>
    
      <div className="box">
          {PortfolioImages}
      </div>
    
    </PortfolioSection>
  )
}

export default Portfolio;

