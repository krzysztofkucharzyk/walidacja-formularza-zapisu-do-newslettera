let form = document.getElementById('form');
let errors = document.getElementById('error');
errors.innerHTML = '';
let acceptAll = document.getElementById('zgodyAll');
let acceptOne = document.getElementById('zmOne');
let acceptTwo = document.getElementById('zmTwo');
let button = document.querySelector('button');



const validate = (event) => {





    event.preventDefault();
}


const checkInput = (event) => {

    // const checkInput = (event) => {

    //     let fullName = document.getElementById('flname');
    //     let errors = document.getElementById('error');
    //     errors.innerHTML = '';
    
    //     if (fullName.value.trim() === '') {
    //         let li = document.createElement('li');
    //         li.innerText = 'Wprowadz poprawne dane';
    //         errors.appendChild(li);
    //     }
        
    //     event.preventDefault();
        
    // }

    let fullName = document.getElementById('flname');
    

    let value = fullName.value;
    let trim = value.trim();

    if (!trim) {
        let li = document.createElement('li');
        li.innerText = 'Wprowadz poprawne dane';
        errors.appendChild(li);
    }
    event.preventDefault();
    
}


function checkEmail(event) {
    let email = document.getElementById('email');

    let value = email.value;
    
    let trim = value.trim();

    if (!trim) {
        let li = document.createElement('li');
        li.innerText = 'Wprowadz poprawny adres email';
        errors.appendChild(li);
    }

    // if (include) {
    //     let li = document.createElement('li');
    //     li.innerText = 'Adres email powinien zawierać @';
    //     errors.appendChild(li);
    // }

    event.preventDefault();
}




form.addEventListener('submit', validate);
form.addEventListener('submit', checkInput);
form.addEventListener('submit', checkEmail);




