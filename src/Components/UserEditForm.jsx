import { useState } from "react";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

const UserEditForm = ({ user, onUpdate }) => {
   const [name, setName] = useState(user.name);
   const [email, setEmail] = useState(user.email);
   const [username, setUsername] = useState(user.username);
   const [phone, setPhone] = useState(user.phone);
   const [website, setWebsite] = useState(user.website);
   const [isLoading, setIsLoading] = useState(false);

   const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      setTimeout(() => {
         const updatedUser = { ...user, name, email, username, phone, website };
         onUpdate(updatedUser);
      }, 2000);
      setIsLoading(false);
   };

   return (
      <div className="card form-container">
         <h4>Edit Registration Form</h4>
         <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
               <label htmlFor="name">Name :{" "}</label>
               <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" required />
            </div>
            <div className="form-group">
               <label htmlFor="email">Email :{" "}</label>
               <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="abc123@gmail.com" required />
            </div>
            <div className="form-group">
               <label htmlFor="userName">User Name :{" "}</label>
               <input id="userName" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter user name" required />
            </div>
            <div className="form-group">
               <label htmlFor="phone">Mobile No :{" "}</label>
               <input id="phone" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91" required />
            </div>
            <div className="form-group">
               <label htmlFor="website">Website :{" "}</label>
               <input id="website" type="text" value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="sample.org" required />
            </div>
            <div className="d-flex justify-content-end">
               <Button type="submit" disabled={isLoading} >{ isLoading ? 'Updating...' : 'Update User'} </Button>
            </div>
         </form>
      </div>
   );
};

export default UserEditForm;

UserEditForm.propTypes = {
   user: PropTypes.object.isRequired,
   onUpdate: PropTypes.func.isRequired,
}