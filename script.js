console.log('connected');

usernameTxt = document.getElementById('usernameTxt');
emailTxt = document.getElementById('emailTxt');
phoneTxt = document.getElementById('phoneTxt');

let validName = false;
let validEmail = false;
let validPhone = false;



usernameTxt.addEventListener('blur', usernameTxthandler);

function usernameTxthandler() {
    console.log('inside usernameTxthandler');
    let str = usernameTxt.value;
    let regex = /^[a-zA-Z]([a-zA-z0-9\._]){2,20}$/;
    if (regex.test(str)) {
        console.log('it matched');
        usernameTxt.classList.remove('is-invalid');
        validName = true;
    }
    else {
        console.log('not matched');
        usernameTxt.classList.add('is-invalid');
        validName = false;
    }
}

emailTxt.addEventListener('blur', emailTxthandler);

function emailTxthandler() {
    console.log('inside emailTxt');
    let str = emailTxt.value;
    let regex = /^([a-zA-z0-9_])([0-9a-zA-Z_\.\-]+)@([a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    if (regex.test(str)) {
        console.log('it matched');
        emailTxt.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        console.log('not matched');
        emailTxt.classList.add('is-invalid');
        validEmail = false;

    }
}

phoneTxt.addEventListener('blur', phoneTxthandler);
function phoneTxthandler() {
    console.log('inside emailTxt');
    let str = phoneTxt.value;
    let regex = /^([0-9]){10}$/;
    if (regex.test(str)) {
        console.log('it matched');
        phoneTxt.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        console.log('not matched');
        phoneTxt.classList.add('is-invalid');
        validPhone = false;

    }
}
let subBtn = document.getElementById('subBtn');

subBtn.addEventListener('click', subBtnhandler);

function subBtnhandler(e){
    e.preventDefault();
    console.log('you clicked submit button');
    if (validName && validEmail && validPhone) {
        let alert_div = document.getElementById('alert_div');
        alert_div.innerHTML = `
        <div class="alert alert-success" role="alert">
           <strong>success!</strong> Your form submitted.
        </div>
        `;
        // setTimeout(function () {
        //     alert_div.innerHTML = ''
        // }, 5000);
        // usernameTxt.value="";
        // emailTxt.value="";
        // phoneTxt.value="";
    }

    else {
        let alert_div = document.getElementById('alert_div');
        alert_div.innerHTML = `
        <div class="alert alert-danger" role="alert">
           <strong>failed!</strong> Please enter valid input.
        </div>`
        
    }

    
}