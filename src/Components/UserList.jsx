import { useEffect, useState } from 'react';
import { getUsers, deleteUser, updateUser } from '../Api';
import User from './User';
import UserForm from './UserForm';
import UserEditForm from './UserEditForm';
import Table from "react-bootstrap/Table";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await getUsers();
    setUsers(response.data);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    setUsers(users.filter(user => user.id !== id));
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleAdd = (newUser) => {
    setUsers([...users, newUser]);
  };

  const handleUpdate = async (updatedUser) => {
    if (updatedUser.id.toString().length < 5) { // assuming mock API ID is less than 5 digits
      await updateUser(updatedUser.id, updatedUser); 
    }
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
    setEditingUser(null);
  };

  return (
    <div>
      {editingUser ? (
        <UserEditForm user={editingUser} onUpdate={handleUpdate} />
      ) : (
        <UserForm onAdd={handleAdd} />
      )}

      <Table bordered hover className='TableColor my-4'>
        <thead>
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
  );
};

export default UserList;
