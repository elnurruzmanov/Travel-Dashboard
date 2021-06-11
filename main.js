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




const pexelsElement = document.querySelectorAll('.pexels')
const addresCenterElement = document.querySelector('.addres-center')
const adressLinkElement = document.querySelector('.address-link')
const priceLinkElement = document.querySelector('.price-link')
const layerImgElement = document.querySelectorAll('.layer-img')


const firstElement = document.querySelector('#first')
const secondElement = document.querySelector('#second')
const thirdElement = document.querySelector('#third')


firstElement.addEventListener("click", event =>{
  for(let item of DATA){
    pexelsElement.forEach (Element = DATA [0] ["img"].forEach(Photo => Element.src = Photo));
    addresCenterElement.textContent = DATA [0]["name"]
    addressLinkElement.textContent = DATA [0]["text"]
    priceLinkElement.textContent = DATA [0]["price"]

    layerImgElement.forEach(Element => DATA [0]["photos"].forEach(layerImg => Element.src = Photo
      ))
  }
})

secondElement.addEventListener("click", event =>{
  for(let item of DATA){
    pexelsElement.forEach (Element = DATA [0] ["img"].forEach(Photo => Element.src = Photo));
    addresCenterElement.textContent = DATA [0]["name"]
    addressLinkElement.textContent = DATA [0]["text"]
    priceLinkElement.textContent = DATA [0]["price"]

    layerImgElement.forEach(Element => DATA [0]["photos"].forEach(Photo => Element.src = Photo ))
  }
})


thirdElement.addEventListener("click", event =>{
  for(let item of DATA){
    pexelsElement.forEach (Element = DATA [0] ["img"].forEach(Photo => Element.src = Photo));
    addresCenterElement.textContent = DATA [0]["name"]
    addressLinkElement.textContent = DATA [0]["text"]
    priceLinkElement.textContent = DATA [0]["price"]

    layerImgElement.forEach(Element => DATA [0]["photos"].forEach(Photo => Element.src = Photo ))
  }
})

const DATA = [
  {
   name: "Phi Phi Islands , Thailand" ,
   text: "Apartment | by Elnur Ro'zmanov",
   img:  ["https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1538825996775-f9e58951a1bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1570780167662-e31f42ca7885?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"],
   price: "4000$", 
   photos: ["https://media.gettyimages.com/photos/sunset-on-phi-phi-island-thailand-picture-id967883566?k=6&m=967883566&s=612x612&w=0&h=3FK9TM2HZPHRdvyAoaV6-yiQfbUGoU9eOfyh_SI_0iA=", "https://media.gettyimages.com/photos/maya-bay-in-krabi-thailand-picture-id1022061146?k=6&m=1022061146&s=612x612&w=0&h=z3ZV0YbOJgkOrNiIP40KA2xYBlQ9ymbbKnlo_Vz_Dy0=", "https://media.gettyimages.com/photos/tourist-sitting-on-a-longtail-boat-in-phi-phi-island-thailand-picture-id949470938?k=6&m=949470938&s=612x612&w=0&h=gWNqQvmf9dyhCstnJYgzf5HU2NOx_SxZKZTDI3rGWZA=", "https://media.gettyimages.com/photos/tourist-sitting-on-a-longtail-boat-in-phi-phi-island-thailand-picture-id949470938?k=6&m=949470938&s=612x612&w=0&h=gWNqQvmf9dyhCstnJYgzf5HU2NOx_SxZKZTDI3rGWZA=", "https://media.gettyimages.com/photos/scenic-aerial-view-of-koh-phi-phi-island-in-thailand-picture-id1136324292?k=6&m=1136324292&s=612x612&w=0&h=vilVAaQ9oyP8LgR-UlESfgvEoK_mV1YFpHqHR5_njZo=", "https://media.gettyimages.com/photos/aerial-view-wide-shot-beautiful-sunset-tropical-beach-sea-in-south-picture-id1058209550?k=6&m=1058209550&s=612x612&w=0&h=NGk51ohqqZonvVnkfKfyAcp2Tk0nBTm_kMfwQdAG3lU="]
  },
  {
    name: "Kudahuvadhoo Island, Maldives" ,
    text: "Apartment | by Elnur Ro'zmanov",
    img:  ["https://images.unsplash.com/photo-1477898359138-361fc07cc252?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a3VkYWh1dmFkaG9vJTIwaXNsYW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1546948630-1149ea60dc86?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8a3VkYWh1dmFkaG9vJTIwaXNsYW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1562108834-75ca626884b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGt1ZGFodXZhZGhvbyUyMGlzbGFuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  ],
    price: "3700$", 
    photos: [ "https://images.unsplash.com/photo-1559008367-1d6412724673?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGt1ZGFodXZhZGhvbyUyMGlzbGFuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", 
    "https://images.unsplash.com/photo-1553773077-91673524aafa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGt1ZGFodXZhZGhvbyUyMGlzbGFuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1534516912899-33ab52feb2f4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGt1ZGFodXZhZGhvbyUyMGlzbGFuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1581345358036-ea2eccfe6e5e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fGt1ZGFodXZhZGhvbyUyMGlzbGFuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1530948990335-1eb93cbe6430?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fGt1ZGFodXZhZGhvbyUyMGlzbGFuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1573667767171-2bb600413d6b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fGt1ZGFodXZhZGhvbyUyMGlzbGFuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  ]
   },

   {
    name: "Greecevillage, Maldives" ,
    text: "Apartment | by Elnur",
    img:  [
      "https://www.greeka.com/photos//villages/gallery/villages-16-480.jpg",
      "https://www.greeka.com/photos//villages/gallery/villages-14-480.jpg",
      "https://www.greeka.com/photos//villages/gallery/villages-80-480.jpg"    
  ],
    price: "4500$", 
    photos: [  
      "https://www.greeka.com/photos//villages/gallery/villages-19-480.jpg", 
      "https://www.greeka.com/photos//villages/gallery/villages-28-480.jpg",
      "https://www.greeka.com/photos//villages/gallery/villages-48-480.jpg",
      "https://www.greeka.com/photos//villages/gallery/villages-99-480.jpg",
      "https://www.greeka.com/photos//villages/gallery/villages-122-480.jpg",
      "https://www.greeka.com/photos//villages/gallery/villages-41-480.jpg",
       
  ]
   },
   
 ]

 const menuElement = document.querySelector('.menu')
 const sidebarElement = document.querySelector('.sidebar')
 const closeBtnElement = document.querySelector('.close-btn')
 const mainElement = document.querySelector('.main')
 const navbarElement = document.querySelector('.navbar')






 
