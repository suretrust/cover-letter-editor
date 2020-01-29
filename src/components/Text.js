import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import '../styles/css/Text.css';
import replaceAll from '../utilities/replaceAll';

const Text = () => {
  const [text, setText] = useState('');

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const str = replaceAll(text, '[Aurity]', 'Saheed');
    console.log(str);
  };

  return (
    <div className="Text">
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <TextareaAutosize autoFocus required name="text" value={text} />
        <button type="submit">Process</button>
      </form>
    </div>
  );
};

export default Text;
