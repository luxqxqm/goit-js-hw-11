import { getImagesByQuery } from "./js/pixabay-api";
import {createGallery, clearGallery, showLoader, hideLoader} from "./js/render-functions"
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form")

hideLoader()

form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    
    const inputValue = event.target.elements["search-text"].value;
    
    
    if (inputValue.trim().length === 0) {
        return
    }
    
    
    clearGallery()
    
    showLoader()
    getImagesByQuery(inputValue)
    .then(data => {
        if (data.length === 0) {
              iziToast.error({
                message: "Sorry, there are no images matching your search query. Please, try again!",
                position: "topRight",
            });   
        }
        else {
        event.target.reset()    
        createGallery(data)
        }
    })
        .catch(() => {
         iziToast.error({
                message: "Something went wrong. Please try again later.",
                position: "topRight",
            });   
    })
        .finally(() => {
        hideLoader()
        
    })


}


    
    
