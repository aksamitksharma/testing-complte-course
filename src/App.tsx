
import './App.css';
import Application from './Components/Application/Application';
import Counter from './Components/Counter/Counter';
import UseComp from './Components/ErrorBoundary/UseComp';
import ApiCalling from './Components/LinksImage/ApiCalling';
import LinkImage from './Components/LinksImage/LinksImage';
import Login from './Components/Login/Login';
import Users from './Components/Users/Users';


function App() {
  
    let apiUrl = "https://jsonplaceholder.typicode.com/users"
  return (
    <>

<ApiCalling apiUrl={apiUrl}/>                   
      {/* <div>
        <LinkImage />
      </div>
      <Application />
      <Login />
      <Counter />

<UseComp /> */}

      <Users />
    </>
  );
}

export default App;
