document.querySelector("#app").innerHTML = `
  <h1>HELLO: ${import.meta.env.HELLO}</h1>
  <h1>Is legacy? ${import.meta.env.LEGACY}</h1>
`;
