import Label from "../components/Label";
import SigninAuth from "../components/SigninAuth";

const Signin = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <SigninAuth />
      <Label type="signin"/>
    </div>
  )
}
export default Signin;