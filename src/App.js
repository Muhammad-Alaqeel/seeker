import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/navbar';
import Course from './Components/course';
import LoginButton from './Components/loginbutton';
import LogoutButton from './Components/logoutbutton';
import TreeElement from './Components/treeElement'
import Tree from './Tree/tree'

import React from "react";
import './App.css';
class App extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
    
		 fetch("http://localhost:80/api/course",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      })
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
          DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
		<div className = "App">

<div className="">
    
         
    <Navigation/>
    <LoginButton/>
    <LogoutButton/>
    <div className='d-flex justify-content-center'>
    </div>
      </div>
			{
                items.map((item) => ( 
                <Course
                title={item.name}
                description={item.description}
                id={item.id}
                image={item.imageurl}
                provider={item.provider}
                price = {item.price}
                
                />
                ))
            }
			

      <Tree/>
		</div>

    
	);

  
 
     
  

  }
}


export default App;



// export default App;
