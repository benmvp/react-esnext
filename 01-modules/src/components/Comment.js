// Module imports to load in dependencies
// Uses default imports
import React from 'react';
import Remarkable from 'remarkable';

var Comment = React.createClass({
    propTypes: {
        children: React.PropTypes.node.isRequired,
        author: React.PropTypes.string.isRequired
    },
    _getRawMarkup: function() {
        var md = new Remarkable();
        var rawMarkup = md.render(this.props.children.toString());

        return {__html: rawMarkup};
    },
    render: function() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={this._getRawMarkup()} />
            </div>
        );
    }
});

export default Comment;
