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
    cardDiv.classList.add("flex");

    const image = document.createElement('img'); 
    image.src = '../images/restaurant.jpg'; 
    cardDiv.appendChild(image);

    const imageText = document.createElement('div');
    imageText.innerText = 'testing blaasdfasd; aksd '; 
    cardDiv.appendChild(imageText); 

    contentDiv.appendChild(cardDiv);
}

function createMenu(){
    const contentDiv = document.querySelector("#content");
    killChildren(contentDiv);
    const tempDiv = document.createElement('div'); 
    tempDiv.innerText = 'creating menu'; 

    contentDiv.appendChild(tempDiv);
}

export {createAbout, createMenu, createHome};
