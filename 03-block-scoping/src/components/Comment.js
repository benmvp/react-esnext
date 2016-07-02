// Module imports to load in dependencies
// Uses both default & named imports
import React, {Component, PropTypes} from 'react';
import Remarkable from 'remarkable';

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
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={this._getRawMarkup()} />
            </div>
        );
    }
}
