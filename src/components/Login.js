import { useState } from "react";
import Header from "./Header";
import StyleAuth from "./StyleAuth";

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  return (
    <>
      <Header></Header>
      <StyleAuth>
        <p>Login</p>
        <input type="text" placeholder = "email" value={email} onChange = {e=>setEmail(e.target.value)}  ></input>
        <input type="password" placeholder="password" value={password} onChange={e=>setPassword(e.target.value)} ></input>
        <button>LOGIN</button>
      </StyleAuth>
    </>
  );
}