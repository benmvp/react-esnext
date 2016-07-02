// Module imports to load in dependencies
// Uses both default & named imports
import React, {Component, PropTypes} from 'react';

// Now that we no longer are using `getInitialState`, we need
// to store the initial state so we can reset it as needed
const INITIAL_STATE = {
    author: '',
    text: ''
};

export default class CommentForm extends Component {
    static propTypes = {
        onCommentSubmit: PropTypes.func.isRequired
    }

    state = INITIAL_STATE

    _updateFormFieldState(name, e) {
        let newState = {};

        newState[name] = e.target.value;

        this.setState(newState);
    }
    _handleAuthorChange(e) {
        this._updateFormFieldState('author', e);
    }
    _handleTextChange(e) {
        this._updateFormFieldState('text', e);
    }
    _handleSubmit(e) {
        // Object destructuring allows us to assign both `author` & `text`
        // variables in a single statement
        let {author, text} = this.state;

        e.preventDefault();

        if (!text || !author) {
            return;
        }

        this.props.onCommentSubmit({author: author, text: text});
        this.setState(INITIAL_STATE);
    }

    render() {
        // Object destructuring allows us to assign both `author` & `text`
        // variables in a single statement
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
