import React, { useRef } from 'react';
import Note from './Note'
import NoteCreator from './NoteCreator'
import './notesLoader.css';

import ReactTable from "react-table-6";  
import "react-table-6/react-table.css" 

import { Table } from 'antd';
import TableComponent from './table';
import GraphPlot from './GraphPlot';



export default class NotesLoader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {dataSource: []};
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
                console.log('logging proper no code response')
                console.log(data)
                // this.getAllNotes()
                this.setState({dataSource: data});
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
                this.setState({dataSource: data});
            });
    }

    componentDidMount() {
        this.getAllNotes();
    }

    render() {

        // const dataSource = [
        //     {
        //       key: '1',
        //       name: 'Ruturaj Apte',
        //       age: 32,
        //       address: 'New York Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '1',
        //       name: 'John Brown',
        //       age: 32,
        //       address: 'New York Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //     {
        //       key: '2',
        //       name: 'Jim Green',
        //       age: 40,
        //       address: 'London Park',
        //     },
        //   ];
        
        const notesData = this.state.dataSource;
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
            {/* <div className="loader-container">
                {notesList}
            </div> */}
            <TableComponent dataSource={this.state.dataSource}/>
            <div>
                <GraphPlot/>
            </div>
            </div>
        )
    }
}