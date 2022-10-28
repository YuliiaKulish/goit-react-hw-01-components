import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 1px 1px hsl(0deg 0% 81% / 10%);
  max-width: 270px;
  width: 100%;
  margin-bottom: 30px;
`;

export const Description = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
`;

export const Img = styled.img`
  border-radius: 50px;
  height: 100px;
  width: 100px;
`;

export const UserName = styled.p`
  color: #1f3349;
  margin: 0;
  padding: 30px 0 0;
`;

export const UserTag = styled.p`
  color: #768696;
  font-size: 16px;
  margin: 0;
  padding: 10px 0 0;
`;

export const Location = styled.p`
  color: #768696;
  font-size: 16px;
  margin: 0;
  padding: 10px 0 0;
`;

export const Stats = styled.ul`
  align-items: center;
  background-color: #f3f6f9;
  display: flex;
  justify-content: center;
  margin: 40px 0 0;
  padding: 0;
  text-align: center;
`;

export const StatsItem = styled.li`
  border-bottom: 1px solid #e4e9f0;
  border-right: 1px solid #e4e9f0;
  border-top: 1px solid #e4e9f0;
  margin: 0;
  max-width: calc(270px / 3);
  padding: 16px 0;
  width: 100%;
`;

export const Label = styled.span`
  color: #768696;
  font-size: 14px;
`;

export const Quantity = styled.span`
  color: #1f3349;
  display: block;
  font-size: 14px;
  font-weight: 700;
  padding-top: 4px;
`;
