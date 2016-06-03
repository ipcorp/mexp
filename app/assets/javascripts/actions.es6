import AppDispatcher from '/app_dispatcher';
import Constants from '/constants';
import Api from '/api'
class Actions {
  static addExpense(params) {
    Api.post('/expenses', {
      expense: params
    }).then( resp => {
      return resp.json();
    }).then( expense => {
      AppDispatcher.dispatch({
        actionType: Constants.ADD_EXPENSE,
        expense: expense
      });
    });
  }
static setExpenses(params) {
    AppDispatcher.dispatch({
      actionType: Constants.SET_EXPENSE,
      expenses: params
    })
  }
}
export default Actions;
