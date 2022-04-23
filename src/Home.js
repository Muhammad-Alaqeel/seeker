import 'bootstrap/dist/css/bootstrap.min.css';
import Crousal from './Components/Home/Slider/Crousal'
import Card from './Components/Home/Card/Card'
import CardPath from './CardPath'


import React from "react";
class Home extends React.Component {


    
		
	render() {
		
return (

      <div style={{ backgroundColor: "#ECF0F3" }}>
        <CardPath />
        <Card image="images/1.jpg" />
        <Crousal />
      </div>

    
	);

  
 
     
  

  }
}


export default Home;



