import SocialLogin from "../../components/social-login";
import FormButton from "../../components/form-btn";
import FormInput from "../../components/form-input";

export default function Login() {
  return (
    <div className="flex flex-col max-w-screen-sm min-h-screen gap-10 px-6 py-8 mx-auto text-white bg-gray-900">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Login with email and password</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput type="text" required placeholder="Username" errors={[]} />
        <FormInput type="email" required placeholder="Email" errors={[]} />
        <FormInput
          type="password"
          required
          placeholder="Password"
          errors={[]}
        />

        <FormButton loading={false} text={"Login"} />
      </form>
      <SocialLogin />
    </div>
  );
}
