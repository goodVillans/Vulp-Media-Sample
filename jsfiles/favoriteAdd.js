// EVENT listeners
document.addEventListener('DOMContentLoaded', getFavorites);
const favContainer = document.querySelector('.favorites-container');


function getFavorites(){

    let favStore;
    if (localStorage.getItem('favItems') === null){
        favStore = [];
    } else {
        favStore = JSON.parse(localStorage.getItem('favItems'));
    }
    // OBJECTS NOT GETTING INSTANTIATED TO FAVORITES PAGE UI
    favStore.forEach((item) =>{
        const itmContainer = document.createElement('div');
        itmContainer.className = 'fav-item';
        itmContainer.innerHTML = ` 
        <h2 class="fav-head">${item.title}</h2>
        <a href="${item.url}" class="btn">Read Again</a>
        `;
        favContainer.appendChild(itmContainer);

        console.log(itmContainer);
    });
}