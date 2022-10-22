import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import CakeInfo from "./CakeInfo";

export default function Home() {
  const [cakeList, setCakelist] = useState([]);
  const [modal, setModal] = useState(false);
  const [cake,setCake] = useState({}) 
  useEffect(() => {
    axios
      .get(`${REACT_APP_URL}/cakes`)
      .then((res) => {
        console.log(res.data);
        setCakelist(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function callModal(name, desc, image, price){
    setModal(true)
    //const cake = {name, desc, image, price}
    setCake({name, desc, image, price})
    console.log("cake", cake);
  }

  return (
    <>
      <Header />
      <Container>
        <CakeBox>
          {cakeList.map((cake) => {
            return (
              <>
                <Cake onClick={()=>callModal(cake.name, cake.description, cake.image, cake.price)}>
                  <img src={cake.image} />
                  <div className="bottom">
                    <p>{cake.name}</p>
                  </div>
                </Cake>
                ;
            
              </>
            );
          })}
              {modal ? (
                
                  <CakeInfo
                    modal={modal}
                    setModal={setModal}
                    name={cake.name}
                    desc={cake.desc}
                    image = {cake.image}
                    price = {cake.price}
                  />
                ) : (
                  <></>
                )}
        </CakeBox>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CakeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 90px;
`;

const Cake = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-left: 13px;
  align-items: flex-start;
  width: 242px;
  height: 270px;
  margin: 10px;
  flex-direction: column;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.3);
  img {
    width: 214px;
    height: 127px;
    border-radius: 5px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.3);
  }
  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-right: 15px;
  }

  p {
    font-size: 15px;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    color: #333;
  }
  p:hover {
    color: #ff6961;
    cursor: pointer;
    filter: brightness(1.2);
  }
  img:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 1s;
   
  }
`;
