import SocialLogin from "../../components/social-login";
import FormButton from "../../components/form-btn";
import FormInput from "../../components/form-input";

export default function SMSLogin() {
  return (
    <div className="flex flex-col max-w-screen-sm min-h-screen gap-10 px-6 py-8 mx-auto text-white bg-gray-900">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Login</h1>
        <h2 className="text-xl">Verify your phone number</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput
          type="number"
          required
          placeholder="Phone number"
          errors={[]}
        />
        <FormInput
          type="number"
          required
          placeholder="Verification code"
          errors={[]}
        />

        <FormButton loading={false} text={"Verify Phone number"} />
      </form>
    </div>
  );
}
