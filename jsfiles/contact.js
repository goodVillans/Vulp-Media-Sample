const form = document.querySelector('#contact-form');
const nameInput = document.querySelector('#alias-input');
const emailInput = document.querySelector('#email-input');
const socialInput = document.querySelector('#social-input');
const submitBtn = document.querySelector("#submit-contact");

function NewContact(name, email, link){
    this.name = name;
    this.email = email;
    this.link = link;
};

//contact form submission to localStorage
form.addEventListener('submit', (e) => {
    let userName = nameInput.value;
    let userEmail = emailInput.value;
    let userLink = socialInput.value;

    if(!userName || !userEmail || !userLink){
        alert("please fill in all fields with valid information");
    } else {
        const newContact = new NewContact(userName, userEmail, userLink);


    // commit to localStorage makes the program tweak, please advise/assist.
        // commitToStorage(newContact);
    
        alert("Information captured! I'll be in touch ASAP");

        nameInput.value = '';
        emailInput.value = '';
        socialInput.value = '';


    }    
    
    e.preventDefault();
});

function commitToStorage (item){
    let itemArr;

    if(localStorage.getItem('contactSubmissions' === null)){
        itemArr = []; 
    } else {
        itemArr = JSON.parse(localStorage.getItem('contactSubmissions'));
    }

    itemArr.push(item);

    localStorage.setItem('contactSubmissions', JSON.stringify(itemArr));
}