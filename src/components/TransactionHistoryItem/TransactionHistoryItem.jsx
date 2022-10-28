import PropTypes from 'prop-types';
import { Td, Tr } from './TransactionHistoryItem.styled';

const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <Tr>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </Tr>
  );
};

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistoryItem;
