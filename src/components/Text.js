import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import '../styles/css/Text.css';
import replaceAll from '../utilities/replaceAll';
import searchAndSave from '../utilities/searchAndSave';

const Text = () => {
  const [text, setText] = useState('');

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const array = searchAndSave(text);
    console.log(array);
    array.forEach(element => {
      setText(replaceAll(text, element, 'Saheed'));
    });
  };

  return (
    <div className="Text">
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <TextareaAutosize
          placeholder="Paste the cover letter here..."
          autoFocus
          required
          name="text"
          value={text}
        />
        <button type="submit">PROCESS COVER LETTER</button>
      </form>
    </div>
  );
};

export default Text;
