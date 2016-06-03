import Expense from '/components/expense';
class ExpenseList extends React.Component {

  static get contextTypes() {
    return {
      store: React.PropTypes.object.isRequired
    }
  }
  // Component Constructor for add (acts on add expense)
  componentDidMount(){
    this.context.store.addChangeListener(this._onChange.bind(this));
  }

  // Component Destructor for delete (acts on delete expense)
  componentWillUnmount(){
    this.context.store.removeChangeListener(this._onChange.bind(this));
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.context.store.expenses().map((expense, i) => {
            return (<Expense key={i} date={expense.date} description={expense.description} amount={parseFloat(expense.amount)} />); //{... expense}
          })}
        </tbody>
      </table>
      );
  }

  _onChange(){
    // forceUpdate is a way to tell the component that it needs to rendered itself
    this.forceUpdate();
  }
}
export default ExpenseList;
