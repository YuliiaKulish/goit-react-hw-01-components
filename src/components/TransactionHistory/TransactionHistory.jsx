import { Table, Thead, Th } from './TransactionHistory.styled';
import TransactionHistoryItem from '../TransactionHistoryItem/TransactionHistoryItem';
import PropTypes from 'prop-types';

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

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default TransactionHistory;
