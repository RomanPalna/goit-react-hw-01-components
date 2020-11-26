import PropTypes from 'prop-types';

function Transactions(props) {
  const { type, amount, currency, id } = props;
  return (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

export default Transactions;

Transactions.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
