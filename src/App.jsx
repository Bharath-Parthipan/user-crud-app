import './App.css';
import UserList from './Components/UserList';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <>
      <div className="Master-container">
        <div className="Main-container">
          <div className="container-fluid">
            <h1 className=" text-white text-center py-3 py-md-4 py-lg-5">React Axios Task</h1>
            <UserList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App
