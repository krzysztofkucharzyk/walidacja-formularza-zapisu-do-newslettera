let form = document.getElementById('form');
let acceptAll = document.getElementById('zgodyAll');
let button = document.querySelector('button');

const validate = (event) => {

    let fullName = document.getElementById('flname');
    let email = document.getElementById('email');
    let errors = document.getElementById('error');
    let acceptOne = document.getElementById('zmOne');

    errors.innerHTML = '';

    let valueName = fullName.value;
    let trimName = valueName.trim();

    let valueEmail = email.value;
    let trimEmail = valueEmail.trim();


    if (!trimName) {
        let li = document.createElement('li');
        li.innerText = 'Wprowadz poprawne dane';
        errors.appendChild(li);
    }

    if (!trimEmail) {
        let li = document.createElement('li');
        li.innerText = 'Wprowadz poprawny adres email';
        errors.appendChild(li);
    }

    if (!email.value.includes('@')) {
        let li = document.createElement('li');
        li.innerText = 'Adres email powinien zawierać @';
        errors.appendChild(li);
    }

    if (!acceptOne.checked) {
        let li = document.createElement('li');
        li.innerText = 'Nie zaznaczono zgody marketingowej 1';
        errors.appendChild(li);
    }
    event.preventDefault();
}

const checkAll = () => {
    
    let checkOne = document.getElementById('zmOne');
    let checkTwo = document.getElementById('zmTwo');

    if(acceptAll.checked) {
        checkOne.checked = true;
        checkTwo.checked = true;
        checkOne.disabled = true;
        checkTwo.disabled = true;
    }

    if(acceptAll.checked == false) {
        checkOne.checked = false;
        checkTwo.checked = false;
        checkOne.disabled = false;
        checkTwo.disabled = false;
    }

}

// const Agree = (event) => {
//     let checkOne = document.getElementById('zmOne');
//     let checkTwo = document.getElementById('zmTwo');

//     checkOne.checked = event.target.checked;
//     checkTwo.checked = event.target.checked;

//     checkOne.disabled = event.target.checked;
//     checkTwo.disabled = event.target.checked;
// }



form.addEventListener('submit', validate);
acceptAll.addEventListener('change', checkAll);




