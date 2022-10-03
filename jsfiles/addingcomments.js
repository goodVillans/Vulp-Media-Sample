
/* ADDING COMMENTS TO MARQUEE*/
const marquee = document.querySelector('.marquee-content');
const commentForm = document.querySelector('.user-input');
const commentField = document.querySelector('#text-input');


 loadEvents()

 function loadEvents(){

    document.addEventListener('DOMContentLoaded', getComments);
    document.addEventListener('submit', addComment);
 }

 function getComments(){
   let comments = [];

   if(localStorage.getItem("comments") === null){
      comments = [];
   } else {
      comments = JSON.parse(localStorage.getItem('comments'));   
   }

   comments.forEach((comment) => {
      const li = document.createElement('li');
      li.className = 'marq-item';
      li.appendChild(document.createTextNode(comment));
      marquee.appendChild(li);
   });
 }


 function addComment(e){
    
    if(commentField.value === ''){
        alert('invalid Comment');
    }
    
   const li = document.createElement('li');
   li.className = 'marq-item';
   li.appendChild(document.createTextNode(commentField.value));
   marquee.appendChild(li);
   setComment(commentField.value);
   commentField.value = "";
    
    e.preventDefault();
 }

 function setComment(comment){
   let comments = [];

   if(localStorage.getItem("comments") === null){
      comments = [];
   } else {
      comments = JSON.parse(localStorage.getItem('comments'));   
   }

   comments.push(comment);

   localStorage.setItem('comments', JSON.stringify(comments));
 }


