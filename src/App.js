import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/navbar';
import Course from './Components/course';
import LoginButton from './Components/loginbutton';
import LogoutButton from './Components/logoutbutton';
function App() {
  return (
    <div className="">
  
       
  <Navigation/>
  <Course
  title={"Artificial Intelligence Masterclass"} 
  image={"https://cdn.pixabay.com/photo/2020/07/31/06/56/ai-5452104_960_720.jpg"}
  description={"Enter the new era of hybrid ai models optimized by deep neuroevolution, with a complete toolkit of ml, dl & ai models"}
  provider={"Udemy"}
  cost={"Free"}
  />
  <LoginButton/>
  <LogoutButton/>
    </div>
  );
}

export default App;
