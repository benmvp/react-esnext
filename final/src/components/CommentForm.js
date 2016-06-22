// Module imports to load in dependencies
// Uses both default & named imports
import React, {Component, PropTypes} from 'react';

const INITIAL_STATE = {
    author: '',
    text: ''
};

// Class definition (formerly React.createClass)
// Module export as default
export default class CommentForm extends Component {
    static propTypes = {
        onCommentSubmit: PropTypes.func.isRequired
    }

    state = INITIAL_STATE

    _updateFormFieldState(name, e) {
        this.setState({[name]: e.target.value});
    }

    _handleAuthorChange(e) {
        this._updateFormFieldState('author', e);
    }

    _handleTextChange(e) {
        this._updateFormFieldState('text', e);
    }

    _handleSubmit(e) {
        e.preventDefault();

        let author = this.state.author.trim();
        let text = this.state.text.trim();

        if (!text || !author) {
            return;
        }

        this.props.onCommentSubmit({author, text});

        this.setState(INITIAL_STATE);
    }

    render() {
        let {author, text} = this.state;

        return (
            <form className="commentForm" onSubmit={this._handleSubmit.bind(this)}>
                <input
                    type="text"
                    placeholder="Your name"
                    value={author}
                    onChange={this._handleAuthorChange.bind(this)}
                />
                <input
                    type="text"
                    placeholder="Say something..."
                    value={text}
                    onChange={this._handleTextChange.bind(this)}
                />
                <input type="submit" value="Post" />
            </form>
        );
    }
}
