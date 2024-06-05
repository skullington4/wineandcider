import React from "react";
import { useState, useEffect } from 'react';
import * as noteService from '../../utilities/notes-service';



export default function S1Harvest({ project }) {


    const [q1note, setQ1Note] = useState('') 
    const [q2note, setQ2Note] = useState('')
    const [q3note, setQ3Note] = useState('')

    const [note, setNote] = useState({
        text: '',
        section: 'S1',
        question: '',
        project: project._id,
        date: ''
    })

    const [note2, setNote2] = useState({
        text: '',
        section: 'S1',
        question: '',
        project: project._id,
        date: ''
    })
    
    const [note3, setNote3] = useState({
        text: '',
        section: 'S1',
        question: '',
        project: project._id,
        date: ''
    })


    useEffect(() => {
        async function getQ1Note() {
            const q1note = await noteService.getQuestionNote('S1', '1', project._id);
            setQ1Note(q1note);
        }
        async function getQ2Note() {
            const q2note = await noteService.getQuestionNote('S1', '2', project._id);
            setQ2Note(q2note);
        }
        async function getQ3Note() {
            const q3note = await noteService.getQuestionNote('S1', '3', project._id);
            setQ3Note(q3note);
        }
        getQ1Note();
        getQ2Note();
        getQ3Note();
    }, []);

    function handleChange(evt) {
        setNote({
            ...note,
            [evt.target.name]: evt.target.value
        })
    }

    function handleChange2(evt) {
        setNote2({
            ...note2,
            [evt.target.name]: evt.target.value
        })
    }

    function handleChange3(evt) {
        setNote3({
            ...note3,
            [evt.target.name]: evt.target.value
        })
    }

    async function handleQuestion1(evt) {
        evt.preventDefault();
        const updatedNote = {
            ...note,
            section: 'S1',
            question: '1',
            project: project._id,
            date: note.date
        };
        setNote(updatedNote); // Update the state
        const newNote = await noteService.createNote(updatedNote); // Use the updated note directly
        setQ1Note(prevNotes => [...prevNotes, newNote]);
        setNote({
            ...note,
            text: '',
            date: ''
        });
    }
    
    async function handleQuestion2(evt) {
        evt.preventDefault();
        const updatedNote2 = {
            ...note2,
            section: 'S1',
            question: '2',
            project: project._id,
            date: note2.date
        };
        setNote2(updatedNote2); // Update the state
        const newNote = await noteService.createNote(updatedNote2); // Use the updated note directly
        setQ2Note(prevNotes => [...prevNotes, newNote]);
    }

    async function handleQuestion3(evt) {
        evt.preventDefault();
        const updatedNote3 = {
            ...note3,
            section: 'S1',
            question: '3',
            project: project._id,
            date: note3.date
        };
        setNote3(updatedNote3); // Update the state
        const newNote = await noteService.createNote(updatedNote3); // Use the updated note directly
        setQ3Note(prevNotes => [...prevNotes, newNote]);
    }

    async function handleDelete(index) {
        const deleteNote = await noteService.deleteNote(q1note[index]._id);
        setQ1Note(q1note.filter((note, i) => i !== index));
    }

    async function handleDelete2(index) {
        const deleteNote = await noteService.deleteNote(q2note[index]._id);
        setQ2Note(q2note.filter((note, i) => i !== index));
    }

    async function handleDelete3(index) {
        const deleteNote = await noteService.deleteNote(q3note[index]._id);
        setQ3Note(q3note.filter((note, i) => i !== index));
    }

    if (!q1note) return null;
    if (!q2note) return null;
    if (!q3note) return null;

return (
    <div className="Stepbox">
        <h1>Step 1: Harvest information</h1>
        <div className="border">
            <div className="">
                <h2>Harvest Method used:</h2>
                {q1note.map((note, index) => (
                    <div className='flexR'  key={index}>
                        <div>
                            Apples/Grapes used: 
                            <p>{note.text}</p>
                        </div>
                        <div>Date:

                            <p>{new Date(note.date).toLocaleDateString()}</p>
                        </div>
                        <button className="smallButton" onClick={() => handleDelete(index)}>Delete</button>
                    </div>
                ))}
            </div>
            <div className="">
                <form className="smallForm" action='' onSubmit={handleQuestion1}>
                    <div className="flexR">
                        <label htmlFor="">Enter Apples/Grapes used:</label>
                        <textarea className='smallInput' name='text' id='text' placeholder="Fruit used" value={note.text} onChange={handleChange}></textarea>
                    </div>
                    <div className="flexR">
                        <label htmlFor="">Enter Date:</label>
                        <input type="date" name="date" id="date" onChange={(evt) => setNote({...note, date: evt.target.value})} />
                    </div>
                    <button className='projectButton' type="submit">Add Note</button>
                </form>
            </div>
        </div>


        <div className="border">
            <h2>How was the fruit obtained:</h2>
            <div className="">
                {q2note.map((note, index) => (
                    <div className='flexR' key={index}>
                        <div>
                            Obtained by: 
                            <p>{note.text}</p>
                        </div>
                        <div>Date:
                            <p>{new Date(note.date).toLocaleDateString()}</p>
                        </div>
                        <button className="smallButton" onClick={() => handleDelete2(index)}>Delete</button>
                    </div>
                ))}
            </div>
            <form className="smallForm" action='' onSubmit={handleQuestion2}>
                <div className="flexR">
                    <textarea className='smallInput' name='text' id='text' placeholder="Growing or Purchased" value={note2.text} onChange={handleChange2}></textarea>
                </div>
                <div className="flexR">
                    <label htmlFor="">Enter Date:</label>
                    <input type="date" name="date" id="date" onChange={(evt) => setNote2({...note2, date: evt.target.value})} />
                </div>
                <button className='projectButton' type="submit">Add Note</button>
            </form>
        </div>

        <div className="border">
            <h2>General Notes:</h2>
            <div>
                {q3note.length ? (
                    q3note.map((note, index) => (
                    <div className='flexR' key={index}>
                        <div>
                            Prepared by: 
                            <p>{note.text}</p>
                        </div>
                        <div>Date:
                            <p>{new Date(note.date).toLocaleDateString()}</p>
                        </div>
                        <button className="smallButton" onClick={() => handleDelete3(index)}>Delete</button>
                    </div>
                )))
                : <h3>No notes yet</h3>
                }
            </div>
            <form className="smallForm" action='' onSubmit={handleQuestion3}>
                <div className="flexR">
                    <textarea className='largeInput' name='text' id='text' placeholder="General comments" value={note3.text} onChange={handleChange3}></textarea>
                </div>
                <div className="flexR">
                    <label htmlFor="">Enter Date:</label>
                    <input type="date" name="date" id="date" onChange={(evt) => setNote3({...note3, date: evt.target.value})} />
                </div>
                <button className='projectButton' type="submit">Add Note</button>
            </form>
        </div>

    </div>
);
}