import { useSession, signIn, signOut } from "next-auth/react";
export default function AuthButton({ text }: any) {
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <>
        <button onClick={() => signOut()}>{text ? text : " Sign out"}</button>
      </>
    );
  }
  return (
    <>
      <button onClick={() => signIn()}>{text ? text : " Sign in"}</button>
    </>
  );
}
