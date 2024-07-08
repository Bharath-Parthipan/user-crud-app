import './App.css';
import UserList from './Components/UserList';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <>
      <div className="Master-container">
        <div className="Main-container">
          <div className="container">
            <h1 className="text-white text-center py-5">User CRUD App</h1>
            <UserList />
          </div>
        </div>
      </div>

      {/* <div className="App">
        <h1>User CRUD App</h1>
        <UserList />
      </div> */}
    </>
  );
}

export default App
