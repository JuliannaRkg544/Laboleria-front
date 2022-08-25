import { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";

export default function CakeInfo({
  modal,
  setModal,
  name,
  desc,
  image,
  price,
}) {
  const [cont, setCont] = useState(0);
  function toggleModal() {
    setModal(!modal);
  }
  return (
    <Modal
      isOpen={modal}
      onRequestClose={toggleModal}
      style={customStyles}
      // onAfterOpen={afterOpenModal}
      contentLabel="Example Modal"
    >
      <ModalStyle>
        <div className="cakeInfo">
          <img src={image} />
          <div>
            <p>{name}</p>
            <p>{desc}</p>
            <p>R${price},00</p>
            <div className="buttonsQuantity">
            <button onClick={() => setCont(cont - 1)}>-</button>
              {cont}
              <button onClick={() => setCont(cont + 1)}>+</button>
            </div>
          </div>
        </div>
        <div className="button">
          {" "}
          <button>Comprar</button>
        </div>
      </ModalStyle>
    </Modal>
  );
}

const customStyles = {
  content: {
    zIndex: "2",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    borderRadius: "50px",
    width: "600px",
    minHeight: "400px",
    display: "flex",
  },
};

const ModalStyle = styled.div`
  z-index: 2;
  display: flex;
  padding-left: 10px;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;

  .cakeInfo {
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
    flex-direction: row;
    width: 100%;
    .buttonsQuantity{
        display: flex;
        justify-content: start;
        align-items: center;
        height: 100%;
      
    }
    button {
      width: 30px;
      height: 100%;
      margin: 0 10px;
    }
    p {
      font-family: "Roboto", sans-serif;
      font-size: 18px;
      color: #555;
      font-weight: 600;
      margin-bottom: 15px;
      padding-left: 15px;
    }
  }

  img {
    width: 250x;
    height: 170px;
    border-radius: 5px;
    box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.3);
  }

  .button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    width: 100px;
    height: 30px;
    background-color: var(--maincolor);
    border: none;
    color: #fff;
    font-size: 15px;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    border-radius: 12px;
  }
`;
