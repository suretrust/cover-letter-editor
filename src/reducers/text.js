export default (state = '', action) => {
  switch (action.type) {
    case 'ADD_TEXT':
      return action.text;

    default:
      break;
  }
  return state;
};
