// Module imports to load in dependencies
// Uses both default & named imports
import React from 'react';
import Comment from './Comment';

var CommentList = React.createClass({
    propTypes: {
        comments: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                id: React.PropTypes.number.isRequired,
                author: React.PropTypes.string.isRequired,
                text: React.PropTypes.string.isRequired
            })
        ).isRequired
    },
    render: function() {
        var comments = this.props.comments;
        var commentNodes = comments.map(function(comment) {
            return (
                <Comment author={comment.author} key={comment.id}>
                    {comment.text}
                </Comment>
            );
        });

        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
});

export default CommentList;
