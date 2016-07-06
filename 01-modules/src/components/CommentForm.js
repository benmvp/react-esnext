// Module imports to load in dependencies
// Uses default imports
import React from 'react';

var CommentForm = React.createClass({
    propTypes: {
        onCommentSubmit: React.PropTypes.func.isRequired
    },
    getInitialState: function() {
        return {author: '', text: ''};
    },
    _updateFormFieldState: function(name, e) {
        var newState = {};

        newState[name] = e.target.value;

        this.setState(newState);
    },
    _handleAuthorChange: function(e) {
        this._updateFormFieldState('author', e);
    },
    _handleTextChange: function(e) {
        this._updateFormFieldState('text', e);
    },
    _handleSubmit: function(e) {
        var author = this.state.author;
        var text = this.state.text;

        e.preventDefault();

        if (!text || !author) {
            return;
        }

        this.props.onCommentSubmit({author: author, text: text});
        this.setState(this.getInitialState());
    },
    render: function() {
        var author = this.state.author;
        var text = this.state.text;

        return (
            <form className="commentForm" onSubmit={this._handleSubmit}>
                <input
                    type="text"
                    placeholder="Your name"
                    value={author}
                    onChange={this._handleAuthorChange}
                />
                <input
                    type="text"
                    placeholder="Say something..."
                    value={text}
                    onChange={this._handleTextChange}
                />
                <input type="submit" value="Post" />
            </form>
        );
    }
});

export default CommentForm;
