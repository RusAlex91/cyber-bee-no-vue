const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const previousBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;

const size = 189



carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
    clearInterval(sliderInterval)
    if (counter >= carouselImages.length - 1) return;
    let desc = document.getElementsByClassName("catalog-pad-2__desc")[0]
    let itemNumber = document.getElementsByClassName("corousel__item-number")[0]
    let title = document.getElementsByClassName("corousel__title")[0]
    carouselSlide.style.transition = "transform 0.8s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    desc.textContent = catalogDesc[counter].description
    itemNumber.textContent = `Item №${catalogDesc[counter].id}`
    title.textContent = catalogDesc[counter].itemName
    desc.classList.add("fade-in")
    itemNumber.classList.add("fade-in")
    title.classList.add("fade-in")

    setTimeout(() => {
        desc.classList.remove("fade-in")
        itemNumber.classList.remove("fade-in")
        title.classList.remove("fade-in")

    }, 500);
});

previousBtn.addEventListener('click', () => {
    clearInterval(sliderInterval)
    if (counter <= 0) return;
    let desc = document.getElementsByClassName("catalog-pad-2__desc")[0]
    let itemNumber = document.getElementsByClassName("corousel__item-number")[0]
    let title = document.getElementsByClassName("corousel__title")[0]
    carouselSlide.style.transition = "transform 0.8s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    desc.textContent = catalogDesc[counter].description
    itemNumber.textContent = `Item №${catalogDesc[counter].id}`
    title.textContent = catalogDesc[counter].itemName
    desc.classList.add("fade-in")
    itemNumber.classList.add("fade-in")
    title.classList.add("fade-in")

    setTimeout(() => {
        desc.classList.remove("fade-in")
        itemNumber.classList.remove("fade-in")
        title.classList.remove("fade-in")

    }, 500);



});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})

const catalogDesc = {
    1: {
        id: 1,
        itemName: "Honey 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do et dolore magna aliqua. Quis ipsum suspendisse"
    },
    2: {
        id: 2,
        itemName: "Honey 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do et dolore magna aliqua."
    },
    3: {
        id: 3,
        itemName: "Honey 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "
    },
    4: {
        id: 4,
        itemName: "Honey 4",
        description: "Lorem ipsum "
    },
    5: {
        id: 5,
        itemName: "Honey 5",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do et dolore "
    },
    6: {
        id: 6,
        itemName: "Honey 6",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do et dolore magna"
    }
}

const sliderInterval = setInterval(() => {

    if (counter >= carouselImages.length - 1) return;
    let desc = document.getElementsByClassName("catalog-pad-2__desc")[0]
    let itemNumber = document.getElementsByClassName("corousel__item-number")[0]
    let title = document.getElementsByClassName("corousel__title")[0]
    carouselSlide.style.transition = "transform 0.8s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    desc.textContent = catalogDesc[counter].description
    itemNumber.textContent = `Item №${catalogDesc[counter].id}`
    title.textContent = catalogDesc[counter].itemName
    desc.classList.add("fade-in")
    itemNumber.classList.add("fade-in")
    title.classList.add("fade-in")

    setTimeout(() => {
        desc.classList.remove("fade-in")
        itemNumber.classList.remove("fade-in")
        title.classList.remove("fade-in")

    }, 500);

}, 3500);

function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

// google maps 

// phone validation