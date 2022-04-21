import React from "react";
import "./AddUser.css";

const AddUser = ({ addData }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    addData(
      e.target.name.value,
      e.target.email.value,
      e.target.username.value,
      e.target.phone.value,
      e.target.website.value
    );
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.username.value = "";
    e.target.phone.value = "";
    e.target.website.value = "";
  };

  return (
    <div className="app">
      <form onSubmit={handleOnSubmit}>
        <h3>Add User</h3>
        <label>Name</label>
        <input placeholder="Name" name="name" />
        <label>Email</label>
        <input placeholder="Email" name="email" />
        <label>Username</label>
        <input placeholder="Username" name="username" />
        <label>Phone</label>
        <input placeholder="Phone" name="phone" />
        <label>Status</label>
        <input placeholder="Status" name="status" />
        <label>Website</label>
        <input placeholder="Website" name="website" />

        <button type="submit">Add</button>
        <hr />
      </form>
    </div>
  );
};

export default AddUser;
