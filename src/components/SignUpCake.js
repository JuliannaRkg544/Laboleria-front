import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import Header from "./Header";

export default function SignUpCake() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  function handleSubmmit(event) {
    event.preventDefault();
    const body = {
      name,
      price: Number(price),
      image,
      description,
    };
    axios
      .post(`${process.env.REACT_APP_URL}/cakes`, body)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  }

  return (
    <>
    <Header/>
 
    <Container>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="Image"
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></input>
      </form>
      <button onClick={handleSubmmit}>submmit</button>
    </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  padding: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
  }
  input {
    margin-bottom: 10px;
  }
`;
