
const weatherForm = document.querySelector("form");
const searchElement = document.querySelector("input");
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

messageOne.textContent = 'Loading...';

weatherForm.addEventListener("submit", e => {
  e.preventDefault();

  const location = searchElement.value;

  console.log(location);
  fetch(`/weather?address=${location}`).then(response => {
    response.json().then(data => {
      if (data.error) {
        messageTwo.textContent = data.error;
        console.log(data.error);
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
        console.log(data.location);
        console.log(data.forecast);
      }
    });
  });
});
