//
var Constants = {
  CHANGE_EVENT: 'change',
  ADD_EXPENSE: 'expenses.add'
};

var Store = new _.extend({}, EventEmitter.prototype, {
  _expenses: [],

  addExpense: function(expense){
    this._expenses[expense.id] = expense;
  },

  expenses: function(){
    return this._expenses;
  },

  addChangeListener: function(callback){
    this.on(Constants.CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback){
    this.removeListener(Constants.CHANGE_EVENT, callback);
  },

  emitChange: function(){
    this.emit(Constants.CHANGE_EVENT);
  }

});

var AppDispatcher = new FluxDispatcher();

AppDispatcher.register(function(payload){
  var action = payload.actionType;
  switch(action) {
    case Constants.ADD_EXPENSE:
      Store.addExpense(payload.expense);
      break;
    default:
      // NO-OP
  }
});

