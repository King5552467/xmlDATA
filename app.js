//XMLHttpRequest

const button = document.getElementById('button')

button.addEventListener('click', loadData);

function loadData() {
  //Instantiate 
  const xhr = new XMLHttpRequest()

  //Open
  xhr.open('GET', 'data.txt', true)

  //Load
  xhr.onload = function getData() {
    if (this.status === 200) {
      document.getElementById('data').innerText = `${this.responseText}`
    }
  }

    //Send
    xhr.send();
}