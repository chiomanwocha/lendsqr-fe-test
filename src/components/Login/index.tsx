import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import logo from "../../assets/icons/logo.svg";
import pablo from "../../assets/images/pablo-sign-in.jpg";
import Button from "../customs/Button";
import Input from "../customs/Input";
import './login.scss';

const Login = () => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    setDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isDisabled = useMemo(() => {
    return (
      details.password.length < 5 ||
      Object.keys(details).some((item) => item === "")
    );
  }, [details]);

  const navigate = useNavigate();

  return (
    <section className="wrapper">
      <section className="left-content">
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        <div className="img-container">
          <img src={pablo} alt="login screen cartoon" />
        </div>
      </section>
      <section className="right-content">
        <div>
          <div className="header">
            <h2>Welcome!</h2>
            <p>Enter details to login.</p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/users");
            }}
          >
            <Input
              placeholder="Email"
              type="email"
              value={details.email}
              name="email"
              onChange={(e) => handleInputChange(e)}
            />
            <Input
              placeholder="Password"
              type="password"
              name="password"
              value={details.password}
              onChange={(e) => handleInputChange(e)}
            />
            <p role="button">Forgot PASSWORD?</p>
            <Button
              text="LOG IN"
              isDisabled={isDisabled}
              onClick={() => null}
              type="submit"
            />
          </form>
        </div>
      </section>
    </section>
  );
};

export default Login;