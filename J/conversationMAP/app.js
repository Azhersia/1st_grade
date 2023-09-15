

const chatLog = [
  {
    sender: 'Anna',
    message: 'Hi Bob! How are you?',
    timestamp: '2023-05-12T07:15:00.000Z'
  },
  {
    sender: 'Bob',
    message: "Hey Anna! I'm doing great, thanks for asking.",
    timestamp: '2023-05-12T07:16:27.000Z'
  },
  {
    sender: 'Bob',
    message: "By the way, have you seen the new movie trailer?",
    timestamp: '2023-05-12T07:17:45.000Z'
  },
  {
    sender: 'Bob',
    message: "I heard it's going to be amazing!",
    timestamp: '2023-05-12T07:18:10.000Z'
  },
  {
    sender: 'Anna',
    message: 'That sounds good! Did you finish the project we were working on?',
    timestamp: '2023-05-12T07:19:30.000Z'
  },
  {
    sender: 'Bob',
    message: "Yes, it's all done and ready for submission. We did a fantastic job!",
    timestamp: '2023-05-12T07:20:12.000Z'
  },
  {
    sender: 'Anna',
    message: 'That\'s amazing! I knew we could do it. Thanks for your hard work.',
    timestamp: '2023-05-12T07:21:05.000Z'
  }
];

const mapped = chatLog.map(item => {
  let newDate = (new Date(item.timestamp));
  return (

    '<h3>' + item.sender + '</h3>' + '<div>' + item.message + '</div>' + '<div>' + item.timestamp + '</div>'
  )
});
console

document.querySelector(".phone").innerHTML = mapped.join('<br>')

