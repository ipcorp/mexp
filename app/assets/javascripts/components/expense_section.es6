import Actions from '/actions'
import ExpenseStore from '/stores/expense_store';
import ExpenseList from '/components/expense_list';
import ExpenseForm from '/components/expense_form';
class ExpenseSection extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = '';
        this.store = new ExpenseStore();
    }
    static get childContextTypes() {
      return {
        store: React.PropTypes.object.isRequired
      }
    }

    getChildContext() {
      return {
        store: this.store
      }
    }

    render() {
        return <div>
                 <ExpenseForm />
                 <ExpenseList />
               </div>
    }
}
window.Actions = Actions;
window.ExpenseSection = ExpenseSection;
export default ExpenseSection;
