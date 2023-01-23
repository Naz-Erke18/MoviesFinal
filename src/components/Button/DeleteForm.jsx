import React from "react";
import styled from "styled-components";
import MyButton from "../UI/MyButton";

const DeleteForm = ({onClose, onDelete}) => {
  return (
    <>
      <h3>Are sure you wanna delete?</h3>
      <ButtonsBox>
        <MyButton color="white" textColor="grey" onClick={onClose}> 
          No
        </MyButton>
        <MyButton color="grey" onClick={onDelete}>Yes</MyButton>
      </ButtonsBox>
    </>
  );
};

export default DeleteForm;

const ButtonsBox = styled.div`
  display: flex;
  justify-content: end;
`;



