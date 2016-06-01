var ExpenseList = React.createClass({
  render: function() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {JSON.parse(this.props.expenses).map(function(expense) {
            return (<Expense key={expense.id} {... expense} />);
          })}
        </tbody>
      </table>
      );
  }
});