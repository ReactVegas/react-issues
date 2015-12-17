import {Component, findDOMNode} from 'react';
import IssueList from './IssueList';

class App extends Component {
  state = {
    repo: 'facebook/react'
  }

  render() {
    return (
      <div>
        <h1>Issues ({this.state.repo})</h1>
        <form onSubmit={::this.handleLoad}>
          <input ref="repoInput" />
          <button type="submit">Load</button>
        </form>
        <IssueList repo={this.state.repo} />
      </div>
    );
  }

  handleLoad(event) {
    event.preventDefault();

    let input = findDOMNode(this.refs.repoInput);

    this.setState({
      repo: input.value
    });

    input.value = '';
  }
}

export default App;
