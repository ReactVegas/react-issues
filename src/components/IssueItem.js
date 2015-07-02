import {PropTypes, Component} from 'react';

class IssueItem extends Component {
  static propTypes = {
    issue: PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    })
  }

  static fromIssue(issue) {
    return (
      <IssueItem key={issue.id} issue={issue} />
    );
  }

  render() {
    return (
      <div>
        <h1>{this.props.issue.title}</h1>
        <p>{this.props.issue.body}</p>
      </div>
    );
  }
}

export default IssueItem;
