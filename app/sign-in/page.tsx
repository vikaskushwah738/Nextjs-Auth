
import LoginGithub from "@/components/GithubLogIn";


export default function SignInPage () {
  return (
    <main className="lg:pt-28 md:pt-24 pt-20 h-screen flex justify-center items-center py-16">
      <section className=" mb-6  flex flex-col w-[300px]">
        <h1 className="text-3xl text-center pt-10">Sign in</h1>
        
        <LoginGithub />
      </section>
    </main>
  );
}