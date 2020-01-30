import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextareaAutosize from 'react-textarea-autosize';
import '../styles/css/Text.css';

const mapStateToProps = state => ({
  text: state.text
});

const EditedText = ({ text }) => {
  return (
    <div className="Text">
      <form>
        <TextareaAutosize name="text" value={text.trim()} disabled />
        <button type="button">COPY TO CLIPBOARD</button>
        <button type="button">EDIT</button>
      </form>
    </div>
  );
};

Text.propTypes = {
  text: PropTypes.string.isRequired
};

export default connect(mapStateToProps, null)(withRouter(EditedText));
