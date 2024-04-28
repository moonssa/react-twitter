import SocialLogin from "../../components/social-login";
import FormButton from "../../components/form-btn";
import FormInput from "../../components/form-input";
import { useForm } from "react-hook-form";
import useMutaion from "../../libs/client/useMutaion";

interface LoginForm {
  username: string;
  email: string;
  password: string;
}

export default function Login() {
  const { register, watch, handleSubmit, reset } = useForm<LoginForm>();
  const [login, { loading, data, error }] = useMutaion("/api/users/login");

  const onValid = (validForm: LoginForm) => {
    if (loading) return;
    login(validForm);
  };
  return (
    <div className="flex flex-col max-w-screen-sm min-h-screen gap-10 px-6 py-8 mx-auto text-white bg-gray-900">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Login with email and password</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput
          name="username"
          register={register("username")}
          type="text"
          required
          placeholder="Username"
          errors={[]}
        />
        <FormInput
          name="email"
          register={register("email")}
          type="email"
          required
          placeholder="Email"
          errors={[]}
        />
        <FormInput
          name="password"
          register={register("password")}
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
