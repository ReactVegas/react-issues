import {PropTypes, Component} from 'react';

class IssueItem extends Component {
  static propTypes = {
    issue: PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    })
  }

  state = {
    showMore: false
  }

  render() {
    return (
      <div>
        <h2>
          <a href="#" onClick={::this.handleClick}>{this.props.issue.title}</a>
        </h2>
        {this.renderMore()}
      </div>
    );
  }

  renderMore() {
    if (this.state.showMore) {
      return (
        <p>{this.props.issue.body}</p>
      );
    }
  }

  handleClick() {
    this.setState({showMore: !this.state.showMore});
  }
}

export default IssueItem;
