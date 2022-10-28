// import PropTypes from 'prop-types';
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

// FriendListItem.propTypes = {
//   avatar: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
// };

export default TransactionHistoryItem;
