import AppDispatcher from '/app_dispatcher';
import Constants from '/constants';
class ExpenseStore extends EventEmitter {
  constructor() {
    super()
    this._expenses = []
    AppDispatcher.register((payload) => {
      switch(payload.actionType) {
        case Constants.SET_EXPENSE:
          this.setExpenses(payload.expenses);
          this.emitChange();
          break;
        case Constants.ADD_EXPENSE:
          this.addExpense(payload.expense);
          this.emitChange();
          break;
        default:
          // NO-OP
      }
    });


  }

  addExpense (expense) {
    this._expenses[expense.id || this._expenses.length] = expense;
  }

  setExpenses (expenses) {
    expenses.forEach(expense => {
      this.addExpense(expense)
    })
  }

  expenses() {
    return this._expenses;
  }

  addChangeListener (callback) {
    this.on(Constants.CHANGE_EVENT, callback);
  }

  removeChangeListener (callback) {
    this.removeListener(Constants.CHANGE_EVENT, callback);
  }

  emitChange () {
    this.emit(Constants.CHANGE_EVENT);
  }

}

export default ExpenseStore;