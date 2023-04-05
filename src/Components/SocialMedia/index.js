import axios from "axios";
import React, { useEffect, useState } from "react";
import './style.css'

const SocialMedia = () => { // الفنكشن كومبوننت ما فيها رندر

  const [social, setSocial] = useState([])

  useEffect ( () =>{
    axios.get("js/data.json").then(res =>{
      setSocial(res.data.social)
    })
  }, [])

  const theSocial = social.map(item =>{
    return (
      <div key={item.id} className={item.briefName}>
          <i className={item.icon}></i>
          <p>
              <span className="info1">{item.title}</span>
              <span className="info2">{item.body}</span>
          </p>
      </div>
    )
  })

  return (
    <div className="social-media">
            {theSocial}
    </div>
  )
}

export default SocialMedia;

