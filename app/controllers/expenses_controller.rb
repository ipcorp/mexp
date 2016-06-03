class ExpensesController < ApplicationController
  def index
    @expenses = Expense.all
  end

  def create
    @expense = Expense.create(expense_params)
  end

  def destroy
    @expense = Expense.find(params[:id])
    @expense.destroy

  end

  private

  def expense_params
    params.require(:expense).permit(:date, :description, :amount)
  end
end
