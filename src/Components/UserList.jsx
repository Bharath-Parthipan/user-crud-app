import { useEffect, useState } from 'react';
import { getUsers, deleteUser, updateUser } from '../Api';
import User from './User';
import UserForm from './UserForm';
import UserEditForm from './UserEditForm';
import Table from "react-bootstrap/Table";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [nextId, setNextId] = useState(1);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await getUsers();
    setUsers(response.data);
    const highestId = response.data.reduce((maxId, user) => Math.max(maxId, user.id), 0);
    setNextId(highestId + 1);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    setUsers(users.filter(user => user.id !== id));
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleAdd = (newUser) => {
    newUser.id = nextId;
    setNextId(nextId + 1);
    setUsers([...users, newUser]);
  };

  const handleUpdate = async (updatedUser) => {
    if (updatedUser.id <= 10) { // assuming mock API ID is less than 5 digits
      await updateUser(updatedUser.id, updatedUser);
    }
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
    setEditingUser(null);
  };

  return (
    <div className="d-flex flex-column gap-5 pb-5 flex-xl-row justify-content-xl-center">
      <div className="d-flex justify-content-center">
        {editingUser ? (
          <UserEditForm user={editingUser} onUpdate={handleUpdate} />
        ) : (
          <UserForm onAdd={handleAdd} />
        )}
      </div>

      <div className="table-container">
        <Table responsive bordered hover className="m-0">
          <thead className="table-primary">
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>User Name</th>
              <th>Phone Number</th>
              <th>webSite</th>
              <th>Buttons</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User
                key={user.id}
                user={user}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default UserList;      