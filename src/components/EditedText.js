import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextareaAutosize from 'react-textarea-autosize';
import '../styles/css/Text.css';

const mapStateToProps = state => ({
  text: state.text
});

const EditedText = ({ text, history }) => {
  const [copySuccess, setCopySuccess] = useState(
    'Click the text below to copy to clipboard'
  );

  const copyToClipboard = () => {
    const copyText = document.getElementById('process-result');
    copyText.select();
    const check = document.execCommand('copy');
    if (check) setCopySuccess('Copied!');
  };

  const handleSubmit = e => {
    e.preventDefault();
    history.push('/');
  };

  return (
    <div className="Text">
      <form onSubmit={handleSubmit}>
        <div onClick={copyToClipboard}>
          <div className="copy-success">{copySuccess}</div>
          <TextareaAutosize
            name="text"
            value={text.trim()}
            id="process-result"
          />
          <button type="submit">EDIT</button>
        </div>
      </form>
    </div>
  );
};

Text.propTypes = {
  text: PropTypes.string.isRequired
};

export default connect(mapStateToProps, null)(withRouter(EditedText));
