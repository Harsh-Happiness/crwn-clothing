import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.util";
import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      console.error("password mismatch!");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    return (
      <div className="sign-up">
        <h2>I don't have account</h2>
        <span>Sign up with you account.</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="displayName"
            label="Name"
            value={this.state.displayName}
            onChange={this.handleChange}
          />
          <FormInput
            name="email"
            type="email"
            label="Email"
            autoComplete="username"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <FormInput
            name="password"
            type="password"
            label="Password"
            autoComplete="new-password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <FormInput
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            autoComplete="new-password"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
          />
          <div className="buttons-bottom">
            <CustomButton onClick={() => {}}>Sign up</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
