import React from 'react';
import Note from './Note'
import NoteCreator from './NoteCreator'
import './notesLoader.css';

export default class NotesLoader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {notesData: []};
        this.handleNoteSubmit = this.handleNoteSubmit.bind(this);
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
        this.handleNoteDelete = this.handleNoteDelete.bind(this);
    }

    forceUpdateHandler(){
        console.log("In force update");
        this.forceUpdate();
    };

    handleNoteSubmit(noteBody) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ question: noteBody })
        };
        fetch('/nocode/question', requestOptions).then(res => res.json()).then(
            data => {
            this.getAllNotes()
            });
      }
    
    handleNoteDelete(index) {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch('/journal/api/notes/'+index, requestOptions).then(res => {if (res.status===204) {
            this.getAllNotes();
        }})
    }
    
    getAllNotes() {
        fetch('/journal/api/notes').then(res => res.json()).then(
            data => {
                console.log("logging data below")
                var arrayLength = data.length;
                for (var i = 0; i < arrayLength; i++) {
                    console.log(data[i]);
                    console.log(data[i]['body']) 
                    //Do something
                }
                this.setState({notesData: data});
            });
    }

    componentDidMount() {
        this.getAllNotes();
    }

    render() {
        const notesData = this.state.notesData;
        const notesList = [];
        for (var i = 0; i < notesData.length; i++) {
            notesList.push(<Note 
                thisNote={notesData[i]}
                onNoteDelete={this.handleNoteDelete}
                key={i} />)
        }
        return (
            <div className="timeline-container">
            <NoteCreator
            onNoteSubmit={this.handleNoteSubmit}/>
            <div className="loader-container">
                {notesList}
            </div>
            </div>
        )
    }
}