import { useState, useEffect } from "react";
import { useSession } from "next-auth/client";
import Image from "next/image";

export default function Secret() {
  const [session, loading] = useSession();
  const [content, setContent] = useState();

  console.log(session);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/secret");
      const json = await res.json();

      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);

  if (typeof window !== "undefined" && loading) return null;

  if (!session) {
    return (
      <main>
        <div>
          <h1>You arent signed in, please sign in first</h1>
        </div>
      </main>
    );
  }
  return (
    <main>
      <div>
        <h1> Protected Page</h1>
        <p>{content}</p>
        <p>{session.user.name}</p>
        <p>{session.user.image}</p>
        <Image src={session.user.image} width={50} height={50} alt="loading" />
      </div>
    </main>
  );
}
