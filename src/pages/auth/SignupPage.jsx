import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <FormContainer>
      <AuthForm
        fields={[
          {
            label: "username",
            type: "text",
          },
          {
            label: "password",
            type: "password",
          },
          {
            label: "confirm password",
            type: "password",
          },
        ]}
        submitButtonLabel="sign up"
      />
      <Link to="/" className="text-green-600 underline text-sm">
        already have an account?
      </Link>
    </FormContainer>
  );
};

export default SignupPage;
