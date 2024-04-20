import React from "react";
import { useState, useEffect } from 'react';
import * as noteService from '../../utilities/notes-service';



export default function S0General({ project }) {


    const [q1note, setQ1Note] = useState('') 

    const [note, setNote] = useState({
        text: '',
        section: 'S0',
        question: '',
        project: project._id,
        date: ''
    })

    useEffect(() => {
        async function getQ1Note() {
            //In this get request, I want to send the section (S0) and the question (1) to the backend to get the note for that question.
            const q1note = await noteService.getQuestionNote('S0', '1', project._id);
            console.log(q1note);
            setQ1Note(q1note);
        }
        getQ1Note();
    }, []);

    function handleChange(evt) {
        setNote({
            ...note,
            [evt.target.name]: evt.target.value
        })
    }

    async function handleQuestion1(evt) {
        evt.preventDefault()
        setNote({
            text: note.text,
            section: 'S0',
            question: '1',
            project: project._id,
            date: note.date
        })
        console.log(note)
        const newNote = await noteService.createNote(note);
        console.log(newNote);
        setQ1Note([...q1note, newNote]);
    }

    async function handleDelete(index) {
        const deleteNote = await noteService.deleteNote(q1note[index]._id);
        console.log(deleteNote);
        setQ1Note(q1note.filter((note, i) => i !== index));
    }


    if (!q1note) return null;

return (
    <div className="Stepbox">
        <h1>General information</h1>
        <div>
            <div>
                <h2>Notes:</h2>
                {q1note.map((note, index) => (
                    <div className='flexR'  key={index}>
                        <div>
                            Apples/Grapes used: 
                            <p>{note.text}</p>
                        </div>
                        <div>Date:

                            <p>{new Date(note.date).toLocaleDateString()}</p>
                        </div>
                        <button className="smallButton">Edit</button>
                        <button className="smallButton" onClick={() => handleDelete(index)}>Delete</button>
                    </div>
                ))}
            </div>
            <div className="">
                <h2>New Note:</h2>
                <form className="smallForm" action='' onSubmit={handleQuestion1}>
                    <div className="flexR">
                        <label htmlFor="">Enter Apples/Grapes used:</label>
                        <input className='smallInput' type="text" name='text' id='text' placeholder="Fruit used" value={note.text} onChange={handleChange}></input>
                    </div>
                    <div className="flexR">
                        <label htmlFor="">Enter Date:</label>
                        <input type="date" name="date" id="date" onChange={(evt) => setNote({...note, date: evt.target.value})} />
                    </div>
                    <button className='projectButton' type="submit">Add Note</button>
                </form>
            </div>
        </div>
    </div>
);
}