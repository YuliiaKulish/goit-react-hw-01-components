import styled from 'styled-components';

export const Table = styled.table`
  background-color: #fff;
  border-spacing: 0;
  margin: 0;
  max-width: 860px;
  padding: 0;
  width: 100%;
`;

export const Thead = styled.thead`
  background-color: rgb(0, 188, 213);
  color: rgb(255, 255, 255);
`;

export const Th = styled.th`
  border-right: 1px solid #fff;
  font-weight: 400;
  padding: 16px 0;
  text-transform: uppercase;
  &:last-child {
    border-right: none;
  }
`;
