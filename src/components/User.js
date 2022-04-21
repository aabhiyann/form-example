import React from "react";
import { useState } from "react";

import "./User.css";

const User = ({ props, deleteData, editData }) => {
  const { name, email, id } = props;
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
            <button onSubmit={handleOnEditSubmit}>Save</button>
          </form>
        ) : (
          <div className="list">
            <span className="user-name">{name}</span>
            <span className="user-email">{email}</span>
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
