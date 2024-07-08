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
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await createUser({ name, email, username, phone, website, });// Assigning a temporary ID to the new user
        const newUser = { ...response.data, id: Date.now()};
        onAdd(newUser);
        setName("");
        setEmail("");
        setUsername("");
        setPhone("");
        setWebsite("");
    };

    return (
        <div className="form-container">
            <h2 className="text-center mb-4">User Form</h2>
            <form onSubmit={handleSubmit} className="form m-0">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
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
                    <Button variant="primary" type="submit" >Add User</Button>
                </div>
            </form>
        </div>

    );
};

export default UserForm;

UserForm.propTypes = {
    onAdd: PropTypes.func.isRequired
}