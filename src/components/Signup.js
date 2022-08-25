import { useState } from "react";
import Header from "./Header";
import StyleAuth from "./StyleAuth";

export default function Signup() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
  return (
    <>
      <Header></Header>
      <StyleAuth>
        <p>Signup</p>
        <input type="text" placeholder = "name" value={name} onChange = {e=>setName(e.target.value)}  ></input>
        <input type="password" placeholder="password" value={password} onChange={e=>setPassword(e.target.value)} ></input>
        <input type="text" placeholder="address" value={address} onChange={e=>setAddress(e.target.value)} ></input>
        <input type="text" placeholder="phone" value={phone} onChange={e=>setPhone(e.target.value)} ></input>
        <input type="text" placeholder="email" value={email} onChange={e=>setEmail(e.target.value)} ></input>
        <button>SIGNUP</button>
      </StyleAuth>
    </>
  );
}
