import { useState } from "react";
import { createUser } from "../Api";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

const UserForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createUser({ name, email, username, phone, website, });// Assigning a temporary ID to the new user
    const newUser = { ...response.data };
    onAdd(newUser);
    setIsLoading(false);
    setName("");
    setEmail("");
    setUsername("");
    setPhone("");
    setWebsite("");
  };

  return (
    <div className="card form-container">
      <h4>Registration Form</h4>
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
          <Button type="submit" disabled={isLoading}>{isLoading ? 'Adding...' : 'Add User'}</Button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;

UserForm.propTypes = {
  onAdd: PropTypes.func.isRequired
}