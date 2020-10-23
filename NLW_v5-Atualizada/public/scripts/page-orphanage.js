const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false 
}

// create map
const map = L.map("mapid", options).setView([-27.2208373,-49.6536839], 15);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
).addTo(map);

// create icon
const icon = L.icon({
 iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor:[170,2]
})

// create popup overlay
const popup = L.popup({
    closeButton: false,
    className:'map-popup',
    minWidth: 240,
    minHeigth: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="chosse-orphanage"> <img src="./public/images/arrow-white.svg"> </a>')

// create and add marker
L
.marker([-27.2208373,-49.6536839], { icon })
.addTo(map)
.bindPopup(popup)



/* image gallery */

function selectImage(event) {
    const button = event.currentTarget

    //remover todas as classes .active
    const buttons =  document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove("active")
    }


    //selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar o container de imagem
    imageContainer.src = image.src


    //adicionar a classe .active
    button.classList.add('active')
}