import Actions from '/actions'
import ExpenseStore from '/stores/expense_store';
import ExpenseList from '/components/expense_list';
import ExpenseForm from '/components/expense_form';
class ExpenseSection extends React.Component {
    constructor(props) {
      super(props);
      this.displayName = '';
      this.store = new ExpenseStore();
      this.actions = Actions;
      this.actions.setExpenses(JSON.parse(props.expenses));
    }
    static get childContextTypes() {
      return {
        store: React.PropTypes.object.isRequired,
        actions: React.PropTypes.func.isRequired
      }
    }

    getChildContext() {
      return {
        store: this.store,
        actions: this.actions
      }
    }

    render() {
        return <div>
                 <ExpenseForm />
                 <ExpenseList />
               </div>
    }
}
window.ExpenseSection = ExpenseSection;
export default ExpenseSection;
