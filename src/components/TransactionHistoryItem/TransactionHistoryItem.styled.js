import styled from 'styled-components';

export const Td = styled.td`
  border-bottom: 1px solid #e4e9f0;
  border-right: 1px solid #e4e9f0;
  color: #768696;
  padding: 16px;
  text-align-last: center;
  &:last-child {
    border-right: none;
  }
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #ecf1f4;
  }
`;
