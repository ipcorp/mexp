import AppDispatcher from '/app_dispatcher';
import Constants from '/constants';

class Actions {
  static addExpense(params) {
    AppDispatcher.dispatch({
      actionType: Constants.ADD_EXPENSE,
      expense: params
    })
  }
}
export default Actions;
