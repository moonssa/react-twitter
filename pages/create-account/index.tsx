import SocialLogin from "../../components/social-login";
import FormButton from "../../components/form-btn";
import FormInput from "../../components/form-input";

export default function CreateAccount() {
  return (
    <div className="flex flex-col max-w-screen-sm min-h-screen gap-10 px-6 py-8 mx-auto text-white bg-gray-900">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
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
        <FormInput
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

// import { FieldErrors, useForm } from "react-hook-form";
// interface LoginForm {
//   username: string;
//   password: string;
//   email: string;
// }
// export default function Forms() {
//   const {
//     register,
//     watch,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<LoginForm>({ mode: "onChange" });
//   console.log(watch());
//   const onvalid = (data: LoginForm) => {
//     console.log(data);
//     console.log("valid!!");
//   };
//   const invalid = (errors: FieldErrors) => {
//     console.log(errors);
//   };
//   return (
//     <form onSubmit={handleSubmit(onvalid, invalid)}>
//       <input
//         {...register("username", {
//           required: "username is required",

//           minLength: {
//             message: "username should be longer than 5 chars",
//             value: 5,
//           },
//         })}
//         type="text"
//         placeholder="Username"
//       />
//       {errors.username?.message}
//       <input
//         {...register("email", {
//           required: "email is required",
//           validate: {
//             notGmail: (value) =>
//               !value.includes("@gmail.com") || "Gmail is not allowed",
//           },
//         })}
//         type="email"
//         placeholder="Email"
//         className={`${Boolean(errors.email) ? "border-red-500" : ""}`}
//       />
//       {errors.email?.message}
//       <input
//         {...register("password", { required: "password is required" })}
//         type="password"
//         placeholder="Password"
//       />
//       {errors.password?.message}
//       <input type="submit" value="Create Account" />
//     </form>
//   );
// }
