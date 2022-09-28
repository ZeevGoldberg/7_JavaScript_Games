const myForm = document.querySelector('#my_form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    
    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please Fill all The Fields';
        setTimeout(() => msg.remove(), 3000);
    } else {
        console.log('Success!');
        const li=document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);
        nameInput.value="";
        emailInput.value="";
    }
}