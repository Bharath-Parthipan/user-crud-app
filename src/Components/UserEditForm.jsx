import { useState } from "react";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

const UserEditForm = ({ user, onUpdate }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [username, setUsername] = useState(user.username);
  const [phone, setPhone] = useState(user.phone);
  const [website, setWebsite] = useState(user.website);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = { ...user, name, email, username, phone, website };
    onUpdate(updatedUser);
  };

    return (
        <div className="form-container">
            <h2 className="text-center mb-4">User Edit Form</h2>
            <form onSubmit={handleSubmit} className="form m-0">
            <div className="form-group">
               <label htmlFor="name">Name:</label>
               <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            </div>
            
            <div className="form-group">
               <label htmlFor="email">Email:</label>
               <input  id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            </div>
            
            <div className="form-group">
               <label htmlFor="Username">Username:</label>
               <input id="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
            </div>
            
            <div className="form-group">
               <label htmlFor="phone">Phone:</label>
               <input id="phone" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" required />
            </div>
            
            <div className="form-group">
               <label htmlFor="name">website:</label>
               <input id="website" type="text" value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="Website" required />
            </div>
            
            <div className="d-flex justify-content-end">
                <Button variant="primary" type="submit" >Update User</Button>
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