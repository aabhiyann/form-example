import React from "react";
import { useState } from "react";

import "./User.css";

const User = ({ props, deleteData, editData }) => {
  const { name, email, id, username, phone, website } = props;
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    deleteData(id);
  };

  const handleOnEditSubmit = (e) => {
    e.preventDefault();
    editData(id, e.target.name.value, e.target.email.value);
    setIsEdit(!isEdit);
  };

  return (
    <React.Fragment>
      {isEdit ? (
        <form onSubmit={handleOnEditSubmit}>
          <input placeholder="Name" name="name" defaultValue={name} />
          <input placeholder="Email" name="email" defaultValue={email} />
          <input
            placeholder="Username"
            name="username"
            defaultValue={username}
          />
          <input placeholder="Phone" name="phone" defaultValue={phone} />
          <input placeholder="Website" name="website" defaultValue={website} />
          <button onSubmit={handleOnEditSubmit}>Save</button>
        </form>
      ) : (
        <tr>
          <td>{name}</td>
          <td>{email}</td>
          <td>{username}</td>
          <td>{phone}</td>
          <td>{website}</td>
          <td>
            <button onClick={handleEdit}>Edit</button>
          </td>
          <td>
            <button onClick={handleDelete}>Delete</button>
          </td>
        </tr>
      )}
    </React.Fragment>
  );
};

export default User;
