import AppDispatcher from '/app_dispatcher';
import Constants from '/constants';
class ExpenseStore extends EventEmitter {
  constructor() {
    super()
    this._expenses = []
    AppDispatcher.register((payload) => {
      switch(payload.actionType) {
        case Constants.ADD_EXPENSE:
          this.addExpense(payload.expense)
          this.emitChange()
          break
        default:
          // NO-OP
      }
    });


  }

  addExpense(expense) {
    this._expenses[expense.id] = expense;
  }

  expenses() {
    return this._expenses;
  }

  addChangeListener(callback) {
    this.on(Constants.CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(Constants.CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(Constants.CHANGE_EVENT);
  }

}

export default ExpenseStore;