import {Component, PropTypes} from 'react';
import IssueList from './IssueList';

class App extends Component {
  static propTypes = {
    issues: PropTypes.array.isRequired
  }

  render() {
    return (
      <IssueList issues={this.props.issues} />
    );
  }
}

export default App;
