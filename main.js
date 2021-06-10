let firstChart = document.getElementById('myChart').getContext('2d');

let barChart = new Chart(firstChart, {
  type: 'bar',
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [{
      barPercentage: 0.5,
      barThickness: 15,
      maxBarThickness: 20,
      minBarLength: 2, 
      label: "Revenue",
      borderRadius: 500,
      data: [
        400,
        500,
        300,
        240,
        700,
        600,
        700
      ],
      backgroundColor: "green"
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Guests',
        fontSize: 30
      },
    }
  }
})


const btnElement = document.querySelector('.btn')
const adressInfoElement = document.querySelector('.adress-info')
const closeElement = document.querySelector('.close')


btnElement.addEventListener('click', event =>{
    adressInfoElement.style.display = 'block'
    closeElement.style.display = 'block'
    btnElement.style.display = "none"
})

closeElement.addEventListener('click', event=>{
    adressInfoElement.style.display = 'none'
    closeElement.style.display = 'none'
    btnElement.style.display = 'block'
})



document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#image-slider' ).mount();
} );





 
