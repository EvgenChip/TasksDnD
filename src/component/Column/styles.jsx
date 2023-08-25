import { styled } from "styled-components";

export const SColumn = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  background-color: rgb(16, 18, 4);
  padding: 20px;
  border-radius: 20px;
  color: rgb(180, 192, 206);
  margin-right: 20px;
  height: 300px;
`;
export const SColumnHeader = styled.div`
  font-size: 19px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
export const SColumnItems = styled.ul`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
