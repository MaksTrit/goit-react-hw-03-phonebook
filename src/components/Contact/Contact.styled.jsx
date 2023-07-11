import styled from 'styled-components';

export const StyledContact = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 3px 4px;
  box-sizing: border-box;
  border: 1px solid grey;
  border-radius: 6px;

  &:hover,
  &:focus {
    border: 2px solid grey;
  }
  p {
    font-size: 18px;
  }
`;
