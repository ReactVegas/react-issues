import {PropTypes, Component} from 'react';
import marked from 'marked';

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
        <h2 onClick={::this.handleClick}>{this.props.issue.title}</h2>
        {this.renderMore()}
      </div>
    );
  }

  renderMore() {
    if (this.state.showMore) {
      let html = marked(this.props.issue.body);

      return (
        <div dangerouslySetInnerHTML={{__html: html}} />
      );
    }
  }

  handleClick() {
    this.setState({showMore: !this.state.showMore});
  }
}

export default IssueItem;
