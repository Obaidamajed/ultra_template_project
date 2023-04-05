import React from "react";
import './style.css'
import { useState, useEffect } from "react";
import axios from "axios";
const Profile = () => { // الفنكشن كومبوننت ما فيها رندر

  const [ skills, setSkills] = useState([]);

  useEffect( () => {
    axios.get("js/data.json").then(res =>{setSkills(res.data.skills)})
  }, []) 

  const theSkills = skills.map((item) =>{
    return (
                  <div className="bar" key={item.id}>
                        <span className="title">{item.name}</span>
                        <span className="perc">{item.percentage}</span>
                        <div className="parent">
                            <span className="sp1"></span>
                        </div>
                  </div>
    )
  })

  return (
    <div className="profile_skills" id="Resumee">
            <div className="container">
                <div className="profile">
                    <h2 className="profile-title"><span>My </span>Profile</h2>
                    <ul className="profile-list">
                        <li className="profile-item">
                            <span>Name</span>
                            Obaida Majed
                        </li>
                        <li className="profile-item">
                            <span>Birthday</span>
                            21/3/1997
                        </li>
                        <li className="profile-item">
                            <span>Address</span>
                            Jordan/Amman
                        </li>
                        <li className="profile-item">
                            <span>Phone</span>
                            +962 781841055
                        </li>
                        <li className="profile-item">
                            <span>Email</span>
                            obaidaalthunibat@gmail.com
                        </li>
                        <li className="profile-item">
                            <span>Website</span>
                            <span className="web">www.google.com</span>
                        </li>
                    </ul>
                </div>
                
                <div className="skills">
                    <h2 className="skills-title">Some <span>skills</span></h2>
                    <p className="skills-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </p>
                    {theSkills}
                </div>
                
            </div>
        </div>
  )
}

export default Profile;

