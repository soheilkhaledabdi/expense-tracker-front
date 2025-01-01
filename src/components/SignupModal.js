import React, { useState } from "react";

function SignupModal({ isOpen, onClose }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Registered:", { username, email, password });
    setUsername("");
    setEmail("");
    setPassword("");
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default SignupModal;
