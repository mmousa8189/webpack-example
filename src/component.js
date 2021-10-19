export default (text = "Hello, From Webpack Example!") => {
  const element = document.createElement("h1");

  element.innerHTML = text;

  return element;
};
