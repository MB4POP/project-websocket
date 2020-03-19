let userName = '';

const loginForm = document.getElementById('welcome-form');
const messagesSection = document.getElementById('messages-section');
const messageList = document.getElementById('messages-list');
const addMessageForm = document.getElementById('add-messages-form');
const userNameInput = document.getElementById('username');
const messageContentInput = document.getElementById('message-content');

function addMessage(author, content) {
  const message = document.createElement('li');
  message.classList.add('message');
  message.classList.add('message--received');
  if(author === userName) message.classList.add('message--self');
  message.innerHTML = `
    <h3 class="message__author">${userName === author ? 'You' : author }</h3>
    <div class="message__content">
      ${content}
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
  } else {
      alert('login input is empty');
    };
};

loginForm.addEventListener('submit', login);

sendMessage = (event) => {
  event.preventDefoult();

  if(messageContentInput.value) {
    addMessage(userName, messageContentInput.value)
  } else {
      alert('Feel in the blanks');
  };

  addMessageForm.reset();
};

addMessageForm.addEventListener('submit', sendMessage);