import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ConfirmRegistration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { str } = useParams();
  const navigate = useNavigate();
  const apiurl = import.meta.env.VITE_API_URLKEY ;
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { email, password };
    await axios
      .post(`${apiurl}/user/activate-user/${str}`, payload)
      .then((res) => {
        toast.success(res.data.message)
        navigate("/landingpage");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });

      setEmail('');
      setPassword('');
      
    // setTimeout(() => {
    //   navigate("/landingpage");
    // }, 1000);
  };
  return (
    <section className="centre_container opacity-75">
      <div className="login_container">
        <h1>Activate your account</h1>
        <form onSubmit={handleSubmit}>
          <div className="input_container ri-mail-fill">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input_container ri-lock-password-fill">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
       
      
      </div>
      
    </section>
  );
};

export default ConfirmRegistration;
