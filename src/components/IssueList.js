import {Component, PropTypes} from 'react';
import IssueItem from './IssueItem';

function cleanupIssue(issue) {
  issue.body = issue.body || 'No description';
  return issue;
}

class IssueList extends Component {
  static propTypes = {
    repo: PropTypes.string.isRequired
  }

  state = {
    issues: []
  }

  componentWillMount() {
    this.loadIssues();
  }

  componentWillReceiveProps() {
    this.loadIssues();
  }

  render() {
    return (
      <div>
        {this.state.issues.map((issue) => {
          return (
            <IssueItem key={issue.id} issue={issue} />
          );
        })}
      </div>
    );
  }

  async loadIssues() {
    let response = await fetch(`https://api.github.com/repos/${this.props.repo}/issues`);
    let issues = await response.json();

    issues = issues.map(cleanupIssue);

    this.setState({issues: issues});
  }
}

export default IssueList;
