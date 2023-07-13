import React from 'react';
import './note.css';

export default class Note extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.props.onNoteDelete(this.props.thisNote.id);
    }

    render() {
        const noteData = this.props.thisNote
        return (
            <div className="note-container">
                <div className="note-body">
                    {noteData.body}
                </div>
                <div className="note-action-bar">
                    <button 
                    className="note-button"
                    onClick={this.handleSubmit}>
                        Delete
            </button>
                </div>
            </div>
        );
    }
}