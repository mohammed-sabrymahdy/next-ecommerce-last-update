"use client";

import { useSession } from "next-auth/react";

const Mesa = () => {
  const { data: session } = useSession();
  return <div>{session ? <p>hello mr: {session.user.name}</p> : <p></p>}</div>;
};
export default Mesa;
