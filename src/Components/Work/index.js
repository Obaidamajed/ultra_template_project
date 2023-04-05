import React, { Component } from "react";
import axios from "axios";
import { WorkSection, WorkTitle, Span, WorkPart, WorkPart1, Icon, PartTitle, Line, PartDesc } from "./style.js"

class Work extends Component  { // الكلاس بايسد كومبوننت لازم يكون جواها ريندر والريندر بداخلها الريتيرن أما الفنكشن كومبوننت ما بكون بداخلها رندر
  
  state = {
    works : []
  }
  
  componentDidMount() {
    axios.get("js/data.json").then(res => {console.log(res.data); // بقلو هاتلي الداتا من ملف الجاسون بعد ما يتم تحميل الصفحة واعرضلي اياهم في الكونسول لوق
      console.log(res.data.works);
      this.setState({works: res.data.works}) // الووركس بعمل إلها أبدايت بعد ما يتم تحميل الصفحة 
        }) 
  }
  

  render() {

    const {works} = this.state;

    const worksList = works.map((workItem) =>{
      return (
        <WorkPart first={workItem.id} key={workItem.id}>
                <Icon className={workItem.icon_name}></Icon>
                <PartTitle>{workItem.title}</PartTitle>
                <Line/>
                <PartDesc>
                    {workItem.body}
                </PartDesc>
        </WorkPart>
      )
    })
    return (
      <WorkSection>
        <div className="container" id="workk">
            <WorkTitle><Span>My</Span> Work</WorkTitle>
            {worksList}
        </div>
      </WorkSection>
    )
  }
  
}

export default Work;

