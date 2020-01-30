export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TEMPLATES':
      return action.templates;

    default:
      break;
  }
  return state;
};
