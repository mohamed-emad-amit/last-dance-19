import { Button, Form } from "react-bootstrap";
import { errorHandler } from "../../utils/errorHandler";
import { useRef, useState } from "react";
import { API } from "../../api/apiService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  // Validate Data Before Send
  const [validated, setValidated] = useState(false);

  // Ref's
  const usernameRef = useRef();
  const passwordRef = useRef();

  // Navigate
  const navigate = useNavigate();

  // Handler
  async function handleLogin(ev) {
    ev.preventDefault();

    const form = ev.target;

    try {
      // Enable Validate
      setValidated(true);

      // Check Validation
      const currentState = form.checkValidity();
      if (!currentState) {
        return;
      }

      // Prepare Data
      const data = {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      };

      // Hit Endpoint
      const response = await API.post("/auth/login", data);

      const userData = response.data;

      // Store [LocalStorage - Redux]
      localStorage.setItem("userData", JSON.stringify(userData));

      // Redux [Not Implemented]

      // Redirect Home
      navigate("/");

      // Message
      toast.success("Welcome");
    } catch (error) {
      // Handle Error Global
      console.log(error);
      errorHandler(error);
    }
  }

  return (
    <div>
      <Form onSubmit={handleLogin} noValidate validated={validated}>
        {/* Username */}
        <Form.Group className="mb-3">
          <Form.Label htmlFor="username">Username</Form.Label>

          <Form.Control
            type="text"
            id="username"
            placeholder="Username"
            name="username"
            required
            minLength={2}
            ref={usernameRef}
          />

          <Form.Control.Feedback type="invalid">
            Please choose a username.
          </Form.Control.Feedback>
        </Form.Group>

        {/* Password */}
        <Form.Group className="mb-3">
          <Form.Label htmlFor="password">Password</Form.Label>

          <Form.Control
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            required
            minLength={6}
            ref={passwordRef}
          />

          <Form.Control.Feedback type="invalid">
            Please choose strong password.
          </Form.Control.Feedback>
        </Form.Group>

        <Button
          type="submit"
          className="fw-bold w-100"
          style={{ maxWidth: "200px" }}
        >
          Login
        </Button>
      </Form>
    </div>
  );
};
