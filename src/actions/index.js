const addText = text => ({
  type: 'ADD_TEXT',
  text
});

const addTemplate = templates => ({
  type: 'ADD_TEMPLATES',
  templates
});

export { addText, addTemplate };
