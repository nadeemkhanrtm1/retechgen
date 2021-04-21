import React from 'react';
import Logo from "../../assests/images/logo/logo.png";
import Card from "../../components/card/Card";
import SoftwareDevelopment from "../../assests/images/software development.png";
import WebDevelopment from "../../assests/images/web dev.png";
import ApplicationDevelopment from "../../assests/images/apps-development.png";
import AllDayservice from "../../assests/images/24by7.png";
import CloudComputing from "../../assests/images/cloud-computing.png";
import RPA from "../../assests/images/robot.png";
import Consultation from "../../assests/images/consulting.png";
import VirtualServices from "../../assests/images/virtualization service.png";
import DigitalMarketing from "../../assests/images/digital marketing.png";
import Infrastructure from "../../assests/images/infrastructure.png";

const Services = () => {
  const card_details_for_development = [{name:"Web Development",image:WebDevelopment},{name:"Application Development",image:ApplicationDevelopment},{name:"Software Development",image:SoftwareDevelopment},{name:"RPA",image:RPA},{name:"IT Consultation",image:Consultation}];
  const card_details_for_marketing = [{name:"Cloud Service",image:CloudComputing},{name:"Virtualization Service",image:VirtualServices},{name:"Infrastructure Services",image:Infrastructure},{name:"Digital Marketing",image:DigitalMarketing},{name:"24*7 Support",image:AllDayservice}];
  return (
    <React.Fragment>
      <h1>Our Services</h1>
      <div className="retechgen-our-services">
        {
          card_details_for_development.map((item)=><Card title={item.name} src={item.image} alt={item.name} key={item.id}/>
          )
        }
      </div>
      <div className="retechgen-our-services">
        {
          card_details_for_marketing.map((item)=><Card title={item.name} src={item.image} alt={item.name} key={item.id}/>)
        }
      </div>
    </React.Fragment>
  )
}

export default Services
