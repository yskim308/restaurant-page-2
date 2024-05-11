import restaurantImage from '../images/restaurant.jpg';
import burgerImage from '../images/burger.jpg';

function killChildren(node){
    while (node.firstChild){
        node.removeChild(node.lastChild);
    }
}

function createAbout(){
    const contentDiv = document.querySelector("#content"); 
    killChildren(contentDiv);
    const tempDiv = document.createElement('div');
    tempDiv.innerText = 'creating the about page'; 

    contentDiv.appendChild(tempDiv);
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
    
    const menuContainer = document.createElement('div'); 
    menuContainer.classList.add('grid', ',sm:grid-cols-2', 'grid-cols-1', 'w-4/5', 'h-auto', 'bg-slate-200'); 
    
    const menuItem = document.createElement('div'); 
    menuItem.classList.add('flex');
    const imageContainer = document.createElement('div'); 
    imageContainer.classList.add('basis-1/3');
    const foodImage = document.createElement('img'); 
    foodImage.src = burgerImage; 
    foodImage.classList.add('object-cover', 'rounded-3xl', 'p-5', 'rounded-full');
    imageContainer.appendChild(foodImage);

    menuItem.appendChild(imageContainer);

    menuContainer.appendChild(menuItem); 
    contentDiv.appendChild(menuContainer);
}

export {createAbout, createMenu, createHome};
