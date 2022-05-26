import "./SignupResident.scss";
import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Input from "../../components/Input/Input";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

class SignupResident extends Component {
    state = {
        error: "",
        success: false,
    };

    handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post(`${SERVER_URL}/residents`, {
                condo_id: 1,
                unit: event.target.unit.value,
                name: event.target.name.value,
                phone: event.target.phone.value,
                email: event.target.email.value,
                password: event.target.password.value,
            })
            .then(() => {
                this.setState({ success: true, error: "" });
                event.target.reset();
            })
            .catch((error) => {
                this.setState({ success: false, error: error.response.data });
            });
    };

    render() {
        return (
            <main className="signup-page">
                <form className="signup" onSubmit={this.handleSubmit}>
                    <h1 className="signup__title">Sign up</h1>

                    <Input type="text" name="unit" label="Unit" />
                    <Input type="text" name="name" label="Name" />
                    <Input type="text" name="phone" label="Phone" />
                    <Input type="text" name="address" label="Address" />
                    <Input type="email" name="email" label="Email" />
                    <Input type="password" name="password" label="Password" />

                    <button className="signup__button">Sign up</button>

                    {this.state.success && <div className="signup__message">Signed up!</div>}
                    {this.state.error && <div className="signup__message">{this.state.error}</div>}
                </form>
                <p>
                    Have an account? <Link to="/login">Log in</Link>
                </p>
            </main>
        );
    }
}

export default SignupResident;
