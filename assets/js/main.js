const dogApi = "https://api.thedogapi.com/v1/images/search";

const button = document.getElementById('button');
const input = document.getElementById('input');
const dogContainer = document.getElementById('dog_container');

const figure = (props) => {
  const { id, url } = props;
  const figure = document.createElement('figure');
  figure.className = "dog-img";
  const img = document.createElement('img');
  img.src = url;
  img.alt = id;

  figure.appendChild(img);
  return figure;
} 

const getData = async(num) => {
  const response = await fetch(`${dogApi}?limit=${num}`);
  const data = await response.json();
  console.log(data);
  return data;
}

const mainFunction = () => {
  const value = input.value || 1;
  getData(value)
    .then(data => data.map( item => figure(item) ))
    .then(dataMapped => dogContainer.append(...dataMapped));
}

button.addEventListener('click', mainFunction);