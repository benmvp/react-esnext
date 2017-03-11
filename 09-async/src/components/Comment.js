// Module imports to load in dependencies
// Uses both default & named imports
import React, {Component, PropTypes} from 'react';
import Remarkable from 'remarkable';

// Class definition (formerly React.createClass)
// Module export as default
export default class Comment extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        author: PropTypes.string.isRequired
    }

    _getRawMarkup() {
        let md = new Remarkable();
        let rawMarkup = md.render(this.props.children.toString());

        return {__html: rawMarkup};
    }

    render() {
        let {author} = this.props;

        return (
            <div className="comment">
                <h2 className="commentAuthor">{author}</h2>
                <span dangerouslySetInnerHTML={this._getRawMarkup()} />
            </div>
        );
    }
}
