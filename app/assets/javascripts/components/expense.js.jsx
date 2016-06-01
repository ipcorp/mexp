var Expense = React.createClass({
  propTypes: {
    date: React.PropTypes.string,
    description: React.PropTypes.string,
    amount: React.PropTypes.number
  },

  render: function(){
    return (
      <tr>
        <td>{this.props.date}</td>
        <td>{this.props.description}</td>
        <td>{this.props.amount}</td>
      </tr>
    );
  }
});