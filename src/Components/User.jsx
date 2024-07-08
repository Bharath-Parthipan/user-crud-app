import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

const User = ({ user, onDelete, onEdit }) => (
  <tr>
    <td>{user.id}</td>
    <td>{user.name}</td>
    <td>{user.email}</td>
    <td>{user.username}</td>
    <td>{user.phone}</td>
    <td>{user.website}</td>
    <td>
      <Button variant="success" onClick={() => onEdit(user)}>Edit</Button>{" "}
      <Button variant="danger" onClick={() => onDelete(user.id)}>Delete</Button>
    </td>
  </tr>
);

export default User;

User.propTypes = {
  user: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};
