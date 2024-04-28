// import type { NextPage } from "next";
// import "./libs/db";
// const Home: NextPage = () => {
//   return (
//     <div className="bg-red-500">
//       <h1 className="text-blue-500"> it works </h1>
//     </div>
//   );
// };

// export default Home;

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between max-w-screen-sm min-h-screen p-6 mx-auto text-white bg-gray-900">
      <div className="my-auto flex flex-col items-center gap-2 *:font-medium">
        <span className="text-9xl">Ⅹ</span>
        <h1 className="text-4xl ">지금 일어나고 있는 일</h1>
        <h2 className="text-2xl">지금 가입하세요.</h2>
      </div>
      <div className="flex flex-col items-center w-full gap-3">
        <Link href="/create-account">
          <span className="primary-btn text-lg  py-2.5 ">시작하기</span>
        </Link>
        <div className="flex gap-2">
          <span>이미 트위터에 가입하셨나요? </span>
          <Link href="/login">
            <span className="text-blue-400 hover: hover:underline hover:underline-offset-4 hover:cursor-pointer">
              로그인
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
