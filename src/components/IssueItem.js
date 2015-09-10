import {PropTypes, Component} from 'react';
import {Spring} from 'react-motion';
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
    let html = marked(this.props.issue.body);

    return (
      <Spring defaultValue={{height: {val: 0}, opacity: {val: 0}}} endValue={this.endValue()}>
        {(animated) =>
          <div
            style={{height: animated.height.val, opacity: animated.opacity.val, overflow: 'auto'}}
            dangerouslySetInnerHTML={{__html: html}}
          />
        }
      </Spring>
    );
  }

  handleClick() {
    this.setState({showMore: !this.state.showMore});
  }

  endValue() {
    const {showMore} = this.state;
    return {
      height: {val: showMore ? 100 : 0},
      opacity: {val: showMore ? 1 : 0}
    };
  }
}

export default IssueItem;
