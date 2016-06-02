class ExpenseForm extends React.Component {
  constructor() {
    super();
    this.displayName = '';
    // Default state for form controls
    this.defaultState = {id: 1, date: '', description: '', amount: ''};
    this.state = this.defaultState;
  }

  submitExpense(event) {
    event.preventDefault();
    Actions.addExpense(this.state)
  }

  onFieldChange(event) {
    let prop  = {};
    prop[event.target.name] = event.target.value;
    this.setState(prop);
  }

  render(){
    return <form>
             <label>Date</label>
             <input type="text" name="date" onChange={this.onFieldChange.bind(this)} value={this.state.date} />
             <label>Description</label>
             <input type="text" name="description" onChange={this.onFieldChange.bind(this)} value={this.state.description} />
             <label>Amount</label>
             <input type="text" name="amount" onChange={this.onFieldChange.bind(this)} value={this.state.amount} />
             <button type="submit" onClick={this.submitExpense.bind(this)}>Submit</button>


           </form>
  }

}
export default ExpenseForm;