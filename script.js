// app.js

document.addEventListener('DOMContentLoaded', function () {
    loadFlowers();
  });
  
  const loadFlowers = () => {
    fetch('http://127.0.0.1:8000/flowers/')
      .then(response => response.json())
      .then(data => {
        console.log('Data fetched successfully:', data);
        displayFlowers(data); // Call function to display flowers
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        // Handle errors here
      });
  };
  
  const displayFlowers = (flowers) => {
    const flowerContainer = document.getElementById('flower-container');
    flowers.forEach(flower => {
      const flowerElement = document.createElement('div');
      flowerElement.classList.add('flower-item');
      flowerElement.innerHTML = `
        <h2>${flower.name}</h2>
        <p>Price: $${flower.price.toFixed(2)}</p>
        <img src="${flower.image}" alt="${flower.name}" />
      `;
      flowerContainer.appendChild(flowerElement);
    });
  };
  