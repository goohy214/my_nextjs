"use client";
import type { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import { Home as DiscordHome } from "@/components/Discord/Home";
import { UserCard } from "@/components/Discord/UserCard";

const Home: NextPage = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <DiscordHome
          user={
            <UserCard
              name={session.user?.name}
              email={session.user?.email}
              image={session.user?.image}
            />
          }
        />
      </>
    );
  }
  return (
    <>
      <DiscordHome
        user={
          <div>
            <div className="relative flex h-16 items-center justify-between">
              <button onClick={() => signIn()}>Sign in</button>
            </div>
          </div>
        }
      />
    </>
  );
};

export default Home;
