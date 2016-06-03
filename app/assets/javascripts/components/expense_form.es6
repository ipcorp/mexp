class ExpenseForm extends React.Component {
  constructor() {
    super();
    this.displayName = '';
    // Default state for form controls
    this.defaultState = { date: '', description: '', amount: 0 };
    this.state = this.defaultState;
  }

  static get contextTypes() {
    return {
      actions: React.PropTypes.func.isRequired
    }
  }

  submitExpense(event) {
    event.preventDefault();
    this.context.actions.addExpense(this.state);
    this.setState(this.defaultState);
  }

  onFieldChange(event) {
    let prop  = {};
    prop[event.target.name] = event.target.value;
    this.setState(prop);
  }

  render(){
    return <form className="form-inline">
             <div className="form-group">
               <label htmlFor="date">Date</label>
               <input id="date" className="form-control" type="text" name="date" onChange={this.onFieldChange.bind(this)} value={this.state.date} />
             </div>
             <div className="form-group">
               <label htmlFor="description">Description</label>
               <input id="description" className="form-control" type="text" name="description" onChange={this.onFieldChange.bind(this)} value={this.state.description} />
             </div>
             <div className="form-group">
               <label htmlFor="amount">Amount</label>
               <input id="amount" className="form-control" type="number" name="amount" onChange={this.onFieldChange.bind(this)} value={this.state.amount} />
             </div>
             <button type="submit" className="btn btn-primary" onClick={this.submitExpense.bind(this)}>Submit</button>
           </form>
  }

}
export default ExpenseForm;