import 'bootstrap/dist/css/bootstrap.min.css';
import {React, useEffect, useState} from "react";
import './App.css';
import ActualCourse from './Components/Home/Card/ActualCourse';
import { Auth0Context, useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

function Courses (props) {





	const [items, setCourses] = useState([]);
	
    const fetchCourses = () => {

        axios.get("http://localhost:80/api/course").then((response) => {
		
            setCourses(response.data);
			
        });
			
	
	};


	useEffect(async () => {
		 fetchCourses();
		

		
    }, []);
	
	
	
	// Render is used to
		return (
		<div className = "App">

<div className="">
    
         
    <div className='row d-flex justify-content-center'>


			{ items.length ? (
                items.map((item) => ( 
                <ActualCourse
                title={item.name}
                provider={item.provider}  
                url={item.url}              
                />
				
                ))
			) : (
				<div>Loading...</div>
			)}
            
			   </div>
			   </div>
		</div>

    
	);

  
 
     
  

  }



export default Courses;
