class Expense extends React.Component {
  static get propTypes() {
    return {
      date: React.PropTypes.string,
      description: React.PropTypes.string,
      amount: React.PropTypes.number
    }
  }

  render(){
    return (
      <tr>
        <td>{this.props.date}</td>
        <td>{this.props.description}</td>
        <td>{this.props.amount}</td>
        <td><a className="btn btn-danger btn-sm">
          <i className="fa fa-trash" /></a>
        </td>
      </tr>
    );
  }
}
export default Expense