import styled from "styled-components";

export default function ({ children }) {
  return <Style>{children}</Style>;
}

const Style = styled.div`
  display: flex;
  padding: 150px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  p{
    color: #555;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 42px;
    margin-bottom: 30px;
  }
  input {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 48px;
    padding: 10px;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    color: #555;
    border: 1px solid #aaa;
    margin: 15px;
  }
  button{
    display: flex;
    border: none;
    justify-content: center;
    width: 50%;
    height: 48px;
    align-items: center;
    border-radius: 50px;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    color: #fff;
    font-weight: 700;
    background-color: var(--maincolor);
    margin-top: 15px;
  }
  button:hover{
    filter: brightness(1.2);
    cursor: pointer;
    transition: 0.4s;
  }
`;
