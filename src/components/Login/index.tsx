import logo from "../../assets/icons/logo.svg";
import pablo from "../../assets/images/pablo-sign-in.jpg";
import Button from "../customs/Button";
import Input from "../customs/Input";
import useLogin from "../../hooks/useLogin";
import "./login.scss";

const Login = () => {
  const { details, handleInputChange, isDisabled, handleSubmit } = useLogin();
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
          <form onSubmit={handleSubmit} data-testid="form">
            <Input
              placeholder="Email"
              type="email"
              value={details.email}
              name="email"
              onChange={handleInputChange}
            />
            <Input
              placeholder="Password"
              type="password"
              name="password"
              value={details.password}
              onChange={handleInputChange}
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
