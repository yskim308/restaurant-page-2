import { createHome, createAbout, createMenu } from "./createPage";

export function makeButtonsDyanmic(){
    createHome(); 
    
    document.querySelector("#home").addEventListener('click', ()=>{
        createHome();
    })

    document.querySelector("#menu").addEventListener('click', ()=>{
        createMenu();
    })
    
    document.querySelector("#about").addEventListener('click', ()=>{
        createAbout();
    })
}
