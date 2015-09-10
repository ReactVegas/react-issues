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
      <Spring defaultValue={{top: {val: -200}}} endValue={this.endValue()}>
        {(animated) =>
          <div style={this.style()}>
            <div
              style={{position: 'relative', top: animated.top.val}}
              dangerouslySetInnerHTML={{__html: html}}
            />
          </div>
        }
      </Spring>
    );
  }

  handleClick() {
    this.setState({showMore: !this.state.showMore});
  }

  style() {
    return {
      overflow: 'hidden',
      display: this.state.showMore ? 'block' : 'none'
    };
  }

  endValue() {
    return {
      top: {val: this.state.showMore ? 0 : -200, config: [240, 18]}
    };
  }
}

export default IssueItem;
