const addToFav = document.querySelectorAll('.heart');
const blogTitle = document.querySelector('#article-title');
const pageUrl = document.querySelector('#ghost-link');




function Favorite(title, url){
    this.title = title;
    this.url = url;
}


loadEvents()

function loadEvents(){
    document.addEventListener('DOMContentLoaded', commitFavorites, getFavorites);
};

// onclick create an object from table data and commit to local storage.
function commitFavorites (){

    addToFav.forEach(favEl => {

        favEl.addEventListener('click', () => {

            // get relevant table text content.
            let blogHeader = blogTitle.textContent;
            let ghostLink = pageUrl.textContent;
            
            const favItem = new Favorite({title: blogHeader, url: ghostLink});
            
        
        // FOR SOME REASON THE OBJECT ABOVE IS REPLACED WHEN A NEW ITEM IS FAVORITED.
            let favStore;
            if (localStorage.getItem('favItems') === null){
                favStore = [];
            } else {
                favStore = JSON.parse(localStorage.getItem('favItems'));
            }
        
            favStore.push(favItem);
        
            localStorage.setItem('favItems', JSON.stringify(favStore));
        });
    });
};


