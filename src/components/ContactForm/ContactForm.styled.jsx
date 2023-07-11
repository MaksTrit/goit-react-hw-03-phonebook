import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  border: 2px solid grey;
  border-radius: 8px;

  background-color: #f3f3f3;
  padding: 10px 8px;
`;

export const FormLabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  gap: 7px;

  input {
    border: 1px solid grey;
    border-radius: 4px;
  }
`;

export const StyledButton = styled.button`
  padding: 4px 6px;
  border: 1px solid grey;
  border-radius: 4px;
  background-color: #dbdbdb;

  &:hover,
  &:focus {
    color: white;
    background-color: grey;
  }
`;
