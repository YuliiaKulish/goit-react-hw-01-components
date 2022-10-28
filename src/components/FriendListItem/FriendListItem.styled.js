import styled from 'styled-components';

export const Item = styled.li`
  background-color: #fff;
  box-shadow: 2px 1px 2px 2px hsl(0deg 0% 81% / 20%);
  list-style-type: none;
  margin: 16px 0 0;
  padding: 8px;
  align-items: center;
  display: flex;
  justify-content: flex-start;
`;

export const IsOnline = styled.span`
  border-radius: 50px;
  display: block;
  height: 16px;
  margin: 0 8px;
  width: 16px;
  background-color: green;
`;

export const IsOffline = styled.span`
  border-radius: 50px;
  display: block;
  height: 16px;
  margin: 0 8px;
  width: 16px;
  background-color: tomato;
`;

export const Avatar = styled.img`
  margin: 0 8px;
`;

export const Name = styled.p`
  font-size: 20px;
  margin-left: 8px;
`;
