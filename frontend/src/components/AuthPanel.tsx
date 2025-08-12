import { useEffect, useState } from "react";
import { auth } from "../lib/firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export default function AuthPanel() {
  const [user, setUser] = useState<null | { uid: string; email: string | null }>(null);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isNew, setIsNew] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u ? { uid: u.uid, email: u.email } : null);
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
      setEmail("");
      setPass("");
    } catch (e: unknown) {
      setErr(e instanceof Error ? e.message : String(e));
    }
  }

  if (user) {
    return (
      <div style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: 4 }}>
        <p>Signed in as <b>{user.email}</b></p>
        <button onClick={() => signOut(auth)}>Sign out</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: 4 }}>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 8 }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          required
        />
        <button type="submit">{isNew ? "Register" : "Sign in"}</button>
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
