const USER = 'User';
const USER_PASS = 'UserPass';

const ADMIN = 'Admin';
const ADM_PASS = 'RootPass';

let time = new Date().getHours();

let login = prompt('Enter your login, please', '');

const TIME_CHANGE = 20;
const MIN_LETTER_COUNT = 4;

if (login === null || !login.length || !login.trim().length) {
    alert('Canceled.');
} else if (login.length < MIN_LETTER_COUNT) {
    alert('I don\'t know any users having name length less than 4 symbols');
} else if (login !== USER && login !== ADMIN) {
    alert('I don’t know you');
} else if (login === USER) {
    let enterPass = prompt('Enter your password, please');
    if (!enterPass.length) {
        alert('Canceled.');
    } else if (enterPass !== USER_PASS) {
        alert('Wrong password');
    } else if (enterPass === USER_PASS) {
        if (time < TIME_CHANGE) {
            alert('Good day, dear User!');
        } else if (time > TIME_CHANGE) {
            alert('Good evening, dear User!');
        }
    }
} else if (login === ADMIN) {
    let enterPass = prompt('Enter your password, please');
    if (!enterPass.length) {
        alert('Canceled.');
    } else if (enterPass !== ADM_PASS) {
        alert('Wrong password');
    } else if (enterPass === ADM_PASS) {
        if (time < TIME_CHANGE) {
            alert('Good day, dear Admin!');
        } else if (time > TIME_CHANGE) {
            alert('Good evening, dear Admin!');
        }
    }
}


