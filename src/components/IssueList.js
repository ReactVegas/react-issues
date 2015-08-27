import {Component, PropTypes} from 'react';
import IssueItem from './IssueItem';

class IssueList extends Component {
  static propTypes = {
    issues: PropTypes.array.isRequired
  }

  render() {
    return (
      <div>
        {this.props.issues.map((issue) => {
          return (
            <IssueItem key={issue.id} issue={issue} />
          );
        })}
      </div>
    );
  }
}

export default IssueList;
