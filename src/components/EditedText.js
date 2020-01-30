import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextareaAutosize from 'react-textarea-autosize';
import '../styles/css/Text.css';

const mapStateToProps = state => ({
  text: state.text
});

const EditedText = ({ text }) => {
  const [copySuccess, setCopySuccess] = useState('Copy to clipboard');

  const copyToClipboard = (e) => {
    const copyText = document.getElementById("process-result");
    copyText.select();
    const check = document.execCommand('copy');
    if (check) setCopySuccess('Copied!');
  };

  return (
    <div className="Text">
      <form>
        <div onClick={ () => copyToClipboard() }>
          <div>{ copySuccess }</div>
          <TextareaAutosize name="text" value={text.trim()} id="process-result" />
          <button type="button">EDIT</button>
        </div>
      </form>
    </div>
  );
};

Text.propTypes = {
  text: PropTypes.string.isRequired
};

export default connect(mapStateToProps, null)(withRouter(EditedText));
