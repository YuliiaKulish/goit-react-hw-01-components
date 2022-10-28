import { Table, Thead, Th } from './TransactionHistory.styled';
import TransactionHistoryItem from '../TransactionHistoryItem/TransactionHistoryItem';

const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Thead>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </Thead>

      <tbody>
        {items.map(({ id, ...rest }) => (
          <TransactionHistoryItem key={id} {...rest} />
        ))}
      </tbody>
    </Table>
  );
};

export default TransactionHistory;
