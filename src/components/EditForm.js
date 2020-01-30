import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import replaceAll from '../utilities/replaceAll';
import { addText } from '../actions';
import '../styles/css/EditForm.css';

const mapStateToProps = state => ({
  templates: state.templates,
  text: state.text
});

const mapDispatchToProps = dispatch => ({
  addText: text => dispatch(addText(text))
});

const EditForm = ({ templates, text, addText, history }) => {
  const [state] = useState({});

  templates.forEach(template => {
    state[template] = '';
  });

  const handleChange = e => {
    state[e.target.name] = e.target.value;
  };

  const handleSubmit = e => {
    e.preventDefault();
    Object.keys(state).forEach(key => {
      text = replaceAll(text, key, state[key]);
    });
    addText(text);
    history.push('/final-copy');
  };

  return (
    <div className="EditForm">
      <form onChange={handleChange} onSubmit={handleSubmit}>
        {templates.map((template, index) => (
          <div className="group" key={index}>
            <label htmlFor={template}>
              {template.slice(1, -1).toUpperCase()}
            </label>
            <input type="text" name={template} required />
          </div>
        ))}
        <button type="submit">REPLACE IN TEMPLATE</button>
      </form>
    </div>
  );
};

Text.propTypes = {
  templates: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired,
  addText: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EditForm));
