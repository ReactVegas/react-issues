import {Component} from 'react';
import IssueItem from './IssueItem';

class App extends Component {
  state = {
    issues: [{
      id: 1,
      title: "Found a bug",
      body: "Something doesn't work"
    }, {
      id: 2,
      title: "Found another bug",
      body: "Something still doesn't work"
    }, {
      id: 3,
      title: "Found yet another bug",
      body: "This whole thing doesn't work"
    }]
  }

  render() {
    return (
      <div>
        {this.state.issues.map(IssueItem.fromIssue)}
      </div>
    );
  }
}

export default App;
