import React from 'react';
import Logo from "../../assests/images/logo/logo.png";
import Card from "../../components/card/Card";

const Services = () => {
  const card_details_for_development = ["Web Development","Application Development","Software Development","RPA","IT Consultation"];
  const card_details_for_marketing = ["Cloud Service","Virtualization Service","Infrastructure Services","Digital Marketing","24*7 Support"];
  return (
    <React.Fragment>
      <h1>Our Services</h1>
      <div className="retechgen-our-services">
        {
          card_details_for_development.map((item)=><Card title={item} src={Logo} alt="..." key={item.id}/>
          )
        }
      </div>
      <div className="retechgen-our-services">
        {
          card_details_for_marketing.map((item)=><Card title={item} src={Logo} alt="..." key={item.id}/>)
        }
      </div>
    </React.Fragment>
  )
}

export default Services
