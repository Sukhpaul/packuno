const weatherWidget = (state = 'SHOW_CURRENT', action) => {
  if (action.type === 'SHOW_CURRENT') {
    return 'SHOW_CURRENT';
  }
  return state;
};

export default weatherWidget;