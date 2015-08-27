import {PropTypes, Component} from 'react';

class IssueItem extends Component {
  static propTypes = {
    issue: PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    })
  }

  render() {
    return (
      <div>
        <h2>{this.props.issue.title}</h2>
        <p>{this.props.issue.body}</p>
      </div>
    );
  }
}

export default IssueItem;
