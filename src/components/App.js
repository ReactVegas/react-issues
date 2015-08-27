import {Component} from 'react';
import IssueList from './IssueList';

class App extends Component {
  render() {
    return (
      <div>
        <h1>React Issues</h1>
        <IssueList repo="facebook/react" />
      </div>
    );
  }
}

export default App;
