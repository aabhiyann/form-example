import React from "react";

const AddUser = ({ addData }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    addData(e.target.name.value, e.target.email.value);
    e.target.name.value = "";
    e.target.email.value = "";
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <h3>Add User</h3>
      <input placeholder="Name" name="name" />
      <input placeholder="Email" name="email" />
      <button type="submit">Add</button>
      <hr />
    </form>
  );
};

export default AddUser;
