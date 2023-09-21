import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f4f4fd;
  color: #010101;
  font-size: 20px;
  font-weight: 500;
`;

export const Button = styled.button`
  width: 100%;
  cursor: pointer;
  border-radius: 6px;
  border: none;
  background-color: #20b8c6;
  color: #ffff;
  font-size: 16px;
  font-weight: 500;
  padding: 12px;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus,
  &:hover {
    background-color: #94cce6;
  }
`;
