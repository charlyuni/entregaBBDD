const socket = io();
const date = new Date().toLocaleString();



function render(data) {
  const html = data.map((elem, index) => {
      return(`<div>
          <strong>${elem.email}</strong> <strong>${elem.date}</strong>:
          <em>${elem.text}</em> </div>`)
  }).join(" ");
  document.getElementById('chat').innerHTML = html;
}


socket.on('messages', function(data) { render(data); });

function addMessage(e) {
  console.log(e);
  const mensaje = {
      email: document.getElementById('email').value,
      date: date,
      text: document.getElementById('texto').value
  };
  console.log(mensaje);
  socket.emit('new-message', mensaje);
  return false;
}