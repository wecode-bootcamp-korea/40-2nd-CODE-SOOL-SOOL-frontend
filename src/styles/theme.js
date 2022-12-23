const flexSet = (just = 'center', align = 'center') => {
  return `display: flex;
    justify-content: ${just};
    align-items: ${align};`;
};

const theme = {
  flexSet,
};

export default theme;
