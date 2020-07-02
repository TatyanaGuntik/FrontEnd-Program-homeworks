const baseUrl = 'http://localhost:3000';
const appContainer = document.getElementById('app-container');


function loader(text) {

    let id = 'loader';
    let block = document.getElementById(id);

    if (block) {
        block.remove();
        return
    }

    let mainBlock = document.createElement('div');
    mainBlock.setAttribute('id', id);

    let textBlock = document.createElement('span');
    textBlock.innerText = text + '...';

    mainBlock.appendChild(textBlock);

    document.body.appendChild(mainBlock);
}

function init() {
    let title = document.createElement('h1');
    title.innerText = 'Manage User App';
    appContainer.appendChild(title);

    let addUserForm = document.createElement('form');
    addUserForm.setAttribute('class', 'addUser');

    let userName = document.createElement('input');
    userName.setAttribute('id', 'newUserName');
    userName.setAttribute('placeholder', 'Name');

    let userFullName = document.createElement('input');
    userFullName.setAttribute('id', 'newUserFullName')
    userFullName.setAttribute('placeholder', 'Full Name');

    let submit = document.createElement('button');
    submit.setAttribute('type', 'submit');
    submit.innerHTML = 'Add New User';

    addUserForm.appendChild(userName);
    addUserForm.appendChild(userFullName);
    addUserForm.appendChild(submit);

    appContainer.appendChild(addUserForm);

    let table = document.createElement('div');
    table.setAttribute('id', 'mainTable');
    table.innerText = 'lskdjf';

    appContainer.appendChild(table);

    addUserForm.addEventListener('submit', function (e) {
        e.preventDefault();
        loader('adding user');

        let newUserName = document.getElementById('newUserName');
        let newUserFullName = document.getElementById('newUserFullName');
        let newUserDataObj = {};

        newUserDataObj['name'] = newUserName.value;
        newUserDataObj['username'] = newUserFullName.value;

        let newUserJson = JSON.stringify(newUserDataObj);

        let xhr = new XMLHttpRequest();
        xhr.open('POST', baseUrl + '/users');
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.send(newUserJson);

        xhr.onload = function () {
            loader();
            initList();
        };
    })
}


function initList() {
    loader('Loading data');

    let xhr = new XMLHttpRequest();
    xhr.open('GET', baseUrl + '/users');

    xhr.send();

    xhr.onload = function () {
        showUsersList(xhr.response);
        loader();
    };
}

function showUsersList(data) {
    let allUsers = JSON.parse(data);
    let table = document.getElementById('mainTable');
    table.innerHTML = '';

    allUsers.forEach(function (item) {
        let userBlock = document.createElement('div');
        userBlock.setAttribute('class', 'userBlock');

        let usId = document.createElement('input');
        usId.setAttribute('class', 'id');
        usId.setAttribute('value', item['id']);
        usId.setAttribute('disabled', 'disabled');
        userBlock.appendChild(usId);

        let usName = document.createElement('input');
        usName.setAttribute('value', item['name']);
        usName.setAttribute('class', 'name');
        userBlock.appendChild(usName);

        let usFullName = document.createElement('input');
        usFullName.setAttribute('value', item['username']);
        usFullName.setAttribute('class', 'username');
        userBlock.appendChild(usFullName);

        let usUpdate = document.createElement('button');
        usUpdate.innerText = 'Update';
        userBlock.appendChild(usUpdate);

        usUpdate.addEventListener('click', function () {

            loader('Updating');

            let userData = {
                'name': this.parentNode.getElementsByClassName('name')[0].value,
                'username': this.parentNode.getElementsByClassName('username')[0].value
            };

            let xhr = new XMLHttpRequest();
            xhr.open('PUT', baseUrl + '/users/' + this.parentNode.getElementsByClassName('id')[0].value);
            xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            xhr.send(JSON.stringify(userData));

            xhr.onload = function () {
                loader();
            };
        });

        let usDelete = document.createElement('button');
        usDelete.innerText = 'Delete';
        userBlock.appendChild(usDelete);

        usDelete.addEventListener('click', function () {
            loader('Deliting');
            this.parentNode.remove();

            let xhr = new XMLHttpRequest();
            xhr.open('DELETE', baseUrl + '/users/' + item['id']);
            xhr.setRequestHeader('Authorization', 'admin');
            xhr.send();

            xhr.onload = function () {
                loader();
            };

        });

        table.appendChild(userBlock);
    })
}

init();
initList();

