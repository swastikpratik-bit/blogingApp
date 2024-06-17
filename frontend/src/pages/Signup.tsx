import Label from "../components/Label";
import SignupAuth from "../components/SignupAuth";

const Signup = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <SignupAuth />
      <Label type="signup"/>
    </div>

  )
}

export default Signup;