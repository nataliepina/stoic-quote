// Allow for text to be copyable
export const copyText = (value: string): void => {
  const dummy = document.createElement('input');
  document.body.appendChild(dummy);
  dummy.setAttribute('value', value);
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);
};

export const getSelectedTheme = () => {
  const storedTheme = localStorage.getItem('selectedTheme');
  return storedTheme ? JSON.parse(storedTheme) : 'primaryTheme';
};
