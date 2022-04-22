import React from "react";
import "./AddUser.css";
import { Button, Form, Row, Col } from "react-bootstrap";

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
      <form onSubmit={handleOnSubmit} className="form">
        <h3>
          <label className="label required">Add User</label>
        </h3>

        <p class="field required">
          <label className="label required">Name</label>
          <input
            placeholder="Name"
            name="name"
            className="text-input"
            required
          />
        </p>

        <p class="field required half">
          <label className="label required">Email</label>
          <input
            placeholder="Email"
            name="email"
            className="text-input"
            required
          />
        </p>

        <p class="field required half">
          <label className="label required">Username</label>
          <input
            placeholder="Username"
            name="username"
            className="text-input"
            required
          />
        </p>

        <p class="field required">
          <label className="label required">Phone</label>
          <input
            placeholder="Phone"
            name="phone"
            className="text-input"
            required
          />
        </p>

        <p class="field required">
          <label className="label required">Status</label>
          <input
            placeholder="Status"
            name="status"
            className="text-input"
            required
          />
        </p>

        <p class="field required">
          <label className="label required">Website</label>
          <input
            placeholder="Website"
            name="website"
            className="text-input"
            required
          />
        </p>

        <p class="field half">
          <input class="button" type="submit" value="Add" />
        </p>
        <hr />
      </form>
    </div>
  );
};

export default AddUser;
