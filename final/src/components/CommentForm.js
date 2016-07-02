// Module imports to load in dependencies
// Uses both default & named imports
import React, {Component, PropTypes} from 'react';

// Now that we no longer are using `getInitialState`, we need
// to store the initial state so we can reset it as needed
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
        // Computed proprety keys makes it possible to create the object literal
        // with a variable key all in one line!
        this.setState({[name]: e.target.value});
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

        // With object literal shorthand, we don't have to duplicate the keys &
        // values because they have the same name!
        this.props.onCommentSubmit({author, text});
        
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
