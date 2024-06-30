import restaurantImage from '../images/restaurant.jpg';
import burgerImage from '../images/burger.jpg';
import mapmarker from '../images/mapMarker.svg';
import mail from '../images/mail.svg';
import phone from '../images/phone.svg'; 

function killChildren(node){
    while (node.firstChild){
        node.removeChild(node.lastChild);
    }
}

function createAbout(){
    const contentDiv = document.querySelector("#content"); 
    killChildren(contentDiv);

    const container = document.createElement('card'); 

    const header = document.createElement('header'); 
    header.innerText = "contact us!"; 
    container.appendChild(header); 

    const line = document.createElement('div'); 
    line.classList.add('flex'); 

    contentDiv.appendChild(container);
}

function createHome(){
    const contentDiv = document.querySelector("#content");
    killChildren(contentDiv);

    const cardDiv = document.createElement("div"); 
    cardDiv.classList.add("sm:grid-cols-2","grid-cols-1", "grid","h-auto", "items-center", "bg-slate-300", "w-3/5", "my-10", "rounded-3xl");

    const cardImage = document.createElement('img'); 
    cardImage.src = restaurantImage;
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('p-10','w-auto', 'h-full', 'flex', 'justify-center', 'items-center');
    cardImage.classList.add("aspect-square", "rounded-2xl", "object-cover", 'rounded-3xl');
    imageContainer.appendChild(cardImage);
    cardDiv.appendChild(imageContainer);

    const descriptionDiv = document.createElement('div'); 
    descriptionDiv.classList.add('flex', 'flex-col', 'p-8', 'items-start');
    const header = document.createElement('div'); 
    header.innerText = 'Welcome to Restarurant'; 
    header.classList.add('font-bold', 'text-lg', 'py-3');
    const description = document.createElement('div'); 
    description.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    description.classList.add('text-justify');
    descriptionDiv.appendChild(header);
    descriptionDiv.appendChild(description); 
    cardDiv.appendChild(descriptionDiv);
    
    
    const infoDiv = document.createElement('div'); 
    infoDiv.classList.add('grid', 'sm:grid-cols-2', 'grid-cols-2', 'w-3/5', 'h-auto', 'my-10');

    contentDiv.appendChild(cardDiv);
    contentDiv.appendChild(infoDiv);
}

function createMenu(){
    const contentDiv = document.querySelector("#content");
    killChildren(contentDiv);
    
    
    for (let i = 0; i < 4; i++){
        const menuContainer = document.createElement('div'); 
        menuContainer.classList.add('rounded-3xl', 'grid', 'sm:grid-cols-3', 'grid-cols-1', 'w-3/5', 'h-auto', 'bg-slate-200', 'my-8', 'p-3'); 
        //image container div in menu item 
        const imageContainer = document.createElement('div'); 
        imageContainer.classList.add('flex', 'justify-center', 'justify-items-center');
        const foodImage = document.createElement('img'); 
        foodImage.src = burgerImage; 
        foodImage.classList.add('max-h-56','object-cover', 'p-5', 'rounded-full');
        imageContainer.appendChild(foodImage);
        //text container div in menu container 
        const textContainer = document.createElement('div'); 
        textContainer.classList.add('flex', 'flex-col', 'col-span-2');
        const textHeader = document.createElement('div'); 
        textHeader.innerText = "Menu Item";
        textHeader.classList.add('text-lg', 'font-extrabold', 'py-2');
        const menuDescription = document.createElement('div'); 
        menuDescription.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        textContainer.appendChild(textHeader);
        textContainer.appendChild(menuDescription);

        menuContainer.appendChild(imageContainer); 
        menuContainer.appendChild(textContainer);
        contentDiv.appendChild(menuContainer);
    }
}

export {createAbout, createMenu, createHome};
