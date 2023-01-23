import React, { useState } from "react";
import styled from "styled-components";
import MovieForm from "../Movies/MovieForm";
import Modal from "../UI/Modal";
import MyButton from "../UI/MyButton";

const Header = ({ onAddNewMovie }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModalHandler = () => {
    // console.log(isModalVisible);
    // event.preventDefault()
    setModalVisible((prev)=>!prev);
    
  };

  return (
    <StyledHeader>
      <Title>Favorite Movies</Title>
      <MyButton onClick={toggleModalHandler} color="#f67722">
        ADD MOVIE
      </MyButton>
      {isModalVisible ? (
        <Modal>
          <MovieForm
            onAddNewMovie={onAddNewMovie}
            onClose={toggleModalHandler}
          />
        </Modal>
      ) : null }
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;
  background: #00329e;
`;

const Title = styled.h1`
  margin: 0;
  color: white;
  font-size: 1.5rem;
`;
