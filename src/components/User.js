import React from "react";
import "./User.css";

const User = ({ props }) => {
  const { name, email } = props;
  return (
    <React.Fragment>
      <div className="list">
        <span>{name}</span>
        <span>{email}</span>
        <span>
          <button>edit</button>
          <button>delete</button>
        </span>
      </div>
    </React.Fragment>
  );
};

export default User;
