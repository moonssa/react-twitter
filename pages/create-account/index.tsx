import SocialLogin from "../../components/social-login";
import FormButton from "../../components/form-btn";
import FormInput from "../../components/form-input";
import { useForm } from "react-hook-form";
// import useMutaion from "../../libs/client.ts/useMutaion";
import useMutaion from "../../libs/client/useMutaion";

interface CreateForm {
  username: string;
  email: string;
  password: string;
  password1: string;
}
export default function CreateAccount() {
  const { register, watch, handleSubmit, reset } = useForm<CreateForm>();
  console.log(watch());
  const [enter, { loading, data, error }] = useMutaion("/api/users/enter");

  const onValid = (validForm: CreateForm) => {
    if (loading) return;
    enter(validForm);
  };
  console.log(data);
  return (
    <div className="flex flex-col max-w-screen-sm min-h-screen gap-10 px-6 py-8 mx-auto text-white bg-gray-900">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form onSubmit={handleSubmit(onValid)} className="flex flex-col gap-3">
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
        <FormInput
          name="password1"
          register={register("password1")}
          type="password"
          required
          placeholder="Confirm Password"
          errors={[]}
        />
        <FormButton loading={false} text={"Create account"} />
      </form>
      <SocialLogin />
    </div>
  );
}
