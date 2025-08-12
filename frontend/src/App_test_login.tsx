import { useEffect, useState } from "react";
import {doc, setDoc } from "firebase/firestore";
import { auth, db } from "./lib/firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export default function App() {
  const [user, setUser] = useState<null | { uid: string; email: string | null }>(null);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isNew, setIsNew] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u ? { uid: u.uid, email: u.email } : null);
      if (u) {
        (async () => {
          try {
            await setDoc(
              doc(db, "users", u.uid),
              { 
                email: u.email, 
                createdAt: new Date(),
                progress: {lessonsCompleted: 0},
                balance: 0
              },
              { merge: true }
            );
            console.log("user doc upserted");
          } catch (e) {
            console.error("Failed to create user doc", e);
          }
        })();
      }
    });
    return () => unsub();
  }, []);
  
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    try {
      if (isNew) {
        await createUserWithEmailAndPassword(auth, email, pass);
      } else {
        await signInWithEmailAndPassword(auth, email, pass);
      }
    } catch (e: unknown) {
      setErr(e instanceof Error ? e.message : String(e));
    }
  }

  if (user) {
    return (
      <div style={{ maxWidth: 420, margin: "40px auto", fontFamily: "system-ui" }}>
        <h1>Signed in</h1>
        <p><b>UID:</b> {user.uid}</p>
        <p><b>Email:</b> {user.email}</p>
        <button onClick={() => signOut(auth)}>Sign out</button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 420, margin: "40px auto", fontFamily: "system-ui" }}>
      <h1>{isNew ? "Create account" : "Sign in"}</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "grid", gap: 8 }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} required
          />
          <input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)} required
          />
          <button type="submit">{isNew ? "Register" : "Sign in"}</button>
        </div>
      </form>
      <p style={{ marginTop: 8 }}>
        {isNew ? "Already have an account?" : "New here?"}{" "}
        <button type="button" onClick={() => setIsNew(!isNew)}>
          {isNew ? "Sign in" : "Create one"}
        </button>
      </p>
      {err && <p style={{ color: "crimson" }}>{err}</p>}
    </div>
  );
}
