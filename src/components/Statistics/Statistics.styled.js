import styled from 'styled-components';

export const Section = styled.section`
  border: 1px solid rgba(128, 128, 128, 0.5);
  border-radius: 4px;
  width: 500px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.h2`
  background-color: rgb(242, 243, 244);
  padding: 30px 0px;
  margin: 0px;
`;

export const StatList = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-evenly;
  margin: 0px;
  padding: 0px;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 15px;
  width: 100px;
  height: 100px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 30px;
`;

export const Label = styled.span``;

export const Percentage = styled.span``;
