let user = 'User';
let userPass = 'UserPass';

let admin = 'Admin';
let admPass = 'RootPass';

let time = new Date().getHours();

let login = prompt('Enter your login, please', '');

let timeChange = 20;
let letterCount = 4;

if (login === null || !login.length || !login.trim().length) {
    alert('Canceled.');
} else if (login.length < letterCount) {
    alert('I don\'t know any users having name length less than 4 symbols');
} else if (login !== user && login !== admin) {
    alert('I don’t know you');
} else if (login === user) {
    let enterPass = prompt('Enter your password, please');
    if (!enterPass.length) {
        alert('Canceled.');
    } else if (enterPass!==userPass) {
        alert('Wrong password');
    } else if (enterPass===userPass) {
        if (time < timeChange) {
            alert('Good day, dear User!');
        } else if (time > timeChange) {
            alert('Good evening, dear User!');
        }
    }
} else if (login === admin) {
    let enterPass = prompt('Enter your password, please');
    if (!enterPass.length) {
        alert('Canceled.');
    } else if (enterPass!==admPass) {
        alert('Wrong password');
    } else if (enterPass===admPass) {
        if (time < timeChange) {
            alert('Good day, dear Admin!');
        } else if (time > timeChange) {
            alert('Good evening, dear Admin!');
        }
    }
}


