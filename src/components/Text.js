import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextareaAutosize from 'react-textarea-autosize';
import '../styles/css/Text.css';
import searchAndSave from '../utilities/searchAndSave';
import { addText, addTemplate } from '../actions';

const mapStateToProps = state => ({
  text: state.text
});

const mapDispatchToProps = dispatch => ({
  addText: text => dispatch(addText(text)),
  addTemplate: templates => dispatch(addTemplate(templates))
});

const Text = ({ addText, addTemplate, history, text }) => {
  const [letter, setLetter] = useState('');
  const [error, setError] = useState('');
  const placeholder = `To use this platform, wrap any text you wish to replace in a [ ] as shown in the example below:

Dear [hiring manager],
   
I’m very excited to submit my application today for a position as a [job title] for [company name]! I used [company name] myself a few years ago when I first started out as a junior developer, and my mentor Alejandra Montez changed my life.
   
I would be thrilled to use every one of my skills in the service of [company name].
   
I’m extremely excited about the opportunity to become a part of [company name] and I hope you’ll be just as happy to have me. Thank you very much for your consideration!
   
Looking forward to hearing from you,
   
Your name

PASTE A SIMLAR TEMPLATE TO GET STARTED!`;

  const handleChange = e => {
    setError('');
    setLetter(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (letter.includes('[')) {
      setError('');
      const templates = searchAndSave(letter);
      addTemplate(templates);
      addText(letter);
      history.push('/edit');
    } else {
      setError(
        'Your template does not contain any "[ ]", please add to proceed'
      );
    }
  };

  return (
    <div className="Text">
      <div className="error">{error}</div>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <TextareaAutosize
          placeholder={placeholder}
          autoFocus
          required
          name="text"
          value={text || letter}
        />
        <button type="submit">PROCESS COVER LETTER</button>
      </form>
    </div>
  );
};

Text.propTypes = {
  addText: PropTypes.func.isRequired,
  addTemplate: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Text));
