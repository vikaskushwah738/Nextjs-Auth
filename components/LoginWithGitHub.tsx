'use client'
import { login } from "@/actions/auth";

const LoginGithub = () => {
 
  return (
    <div className="flex justify-center pt-5">
      <button
        onClick={() => login('github')}
        className="w-[250px] py-1.5 px-5 rounded-xl hover:text-blue-400 hover:border-blue-400 border-2  hover:bg-gray-50 cursor-pointer bg-blue-400 text-gray-50 flex justify-center items-center gap-4"
        >
        Login with Github
      </button>
     
    </div>
  );
};

export default LoginGithub;