let userName = '';

const socket = io();

const loginForm = document.getElementById('welcome-form');
const messagesSection = document.getElementById('messages-section');
const messageList = document.getElementById('messages-list');
const addMessageForm = document.getElementById('add-messages-form');
const userNameInput = document.getElementById('username');
const messageContentInput = document.getElementById('message-content');


socket.on('message', ({ author, content }) => addMessage(author, content))

function addMessage(author, content) {
  const message = document.createElement('li');
  message.classList.add('message');
  message.classList.add('message--received');
  if(author === userName) message.classList.add('message--self');
  message.innerHTML = `
    <h3 class="message__author">${userName === author ? 'You' : author }</h3>
    <div class="message__content">
    ${author === "Chat Bot" ? `<i>${content}</>` : content}  
    </div>
  `;
  messagesList.appendChild(message);
};
  
login = (event) => {
  event.preventDefoult();

  if(userNameInput.value) {
    userName = userNameInput.value
    
    loginForm.classList.remove('show');
    messagesSection.classList.add('show');
    socket.emit('login', { name: userName });
  } else {
      alert('login input is empty');
    };
};

loginForm.addEventListener('submit', login);

function sendMessage(e) {
  e.preventDefault();

  let messageContent = messageContentInput.value;

  if(!messageContent.length) {
    alert('You have to type something!');
  }
  else {
    addMessage(userName, messageContent);
    socket.emit('message', { author: userName, content: messageContent })
    messageContentInput.value = '';
  }

}

addMessageForm.addEventListener('submit', sendMessage);
