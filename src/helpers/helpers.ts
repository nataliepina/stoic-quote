// Allow for text to be copyable
export const copyText = (value: string) => {
  const dummy = document.createElement("input");
  document.body.appendChild(dummy);
  dummy.setAttribute("value", value);
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
};
