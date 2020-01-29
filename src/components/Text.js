import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import '../styles/css/Text.css';

const Text = () => {
  const [text, setText] = useState('');

  const handleChange = e => {
    setText(e.target.value);
  };

  return (
    <div className="Text">
      <form onChange={handleChange}>
        <TextareaAutosize autoFocus required name="text" value={text} />
        <button type="submit">Process</button>
      </form>
    </div>
  );
};

export default Text;
