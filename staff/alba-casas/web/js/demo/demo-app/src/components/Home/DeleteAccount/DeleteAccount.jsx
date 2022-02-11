/* eslint-disable jsx-a11y/anchor-is-valid */
import "./DeleteAccount.css";
import unregisterUser from "../../../logic/logic/unregister-user";
import { useState } from "react";
import Feedback from "../../Feedback/Feedback";

function DeleteAccount({ onProfile, token, onLanding }) {
  const [feedBack, setFeedback] = useState();

  const deleteAccount = (event) => {
    event.preventDefault();
    const {
      target: {
        password: { value: password },
      },
    } = event;
    try {
      unregisterUser(token, password);
      alert("deleted user");
      onLanding();
    } catch ({ message }) {
      setFeedback(message);
    }
  };

  return (
    <div className="delete-account">
      <form className="delete-account__form" onSubmit={deleteAccount}>
        <input
          className="delete-account__password-input"
          type="password"
          name="password"
          placeholder="Password"
        />
        {feedBack && <Feedback message={feedBack} level="error" />}
        <button type="submit">Delete account</button>

        <a
          className="delete-account__back-link"
          href=""
          onClick={(event) => {
            event.preventDefault();

            onProfile();
          }}
        >
          back
        </a>
      </form>
    </div>
  );
}

export default DeleteAccount;
