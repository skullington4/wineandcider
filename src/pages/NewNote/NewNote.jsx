import { useState } from 'react';

export default function NewNote({}) {

  const [note, setNote] = useState({});

  async function handleSubmit(evt) {
    evt.preventDefault();
    // const createdNote = await notesService.createNote(note);
    console.log(note);
    setNote('');
  }

  function handleChange(evt) {
    setNote(evt.target.value);
  }

  return (
    <main>
        <h1>New Note page</h1>


        <div>
            <form action="" onSubmit={handleSubmit}>
              <input type="submit" value="Add Note" />
              <label htmlFor="text">
                <input type="text" name="text" id="text" onChange={handleChange} value={note}/>
              </label>
              <button type="submit">Add Note</button>
            </form>
        </div>
    </main>
  );
}