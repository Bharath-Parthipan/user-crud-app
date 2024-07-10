import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const User = ({ user, onDelete, onEdit }) => (
  <tr>
    <td>{user.id}</td>
    <td>{user.name}</td>
    <td>{user.email}</td>
    <td>{user.username}</td>
    <td>{user.phone}</td>
    <td>{user.website}</td>
    <td className="text-center">
      <FontAwesomeIcon icon={faPenToSquare} onClick={() => onEdit(user)} style={{ color: "blue", paddingRight: "15px" }} />
      <FontAwesomeIcon icon={faTrashCan} onClick={() => onDelete(user.id)} style={{ color: "red" }} />
    </td>
  </tr>
);

export default User;

User.propTypes = {
  user: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};
