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
      <div>
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
            <input
              placeholder="Website"
              name="website"
              defaultValue={website}
            />
            <button onSubmit={handleOnEditSubmit}>Save</button>
          </form>
        ) : (
          <div className="list">
            <span className="user-name">{name}</span>
            <span className="user-email">{email}</span>
            <span className="user-username">{username}</span>
            <span className="user-phone">{phone}</span>
            <span className="user-website">{website}</span>
            <div>
              <button onClick={handleEdit}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default User;
