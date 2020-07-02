const root = document.getElementById('root');
const listName = 'myBooklist';

function displayBooklist(booklist) {
    let block = document.createElement('ol');

    for (let item in booklist) {
        let book = displayBookItem(booklist[item], item);
        block.appendChild(book);
    }
    let addButton = document.createElement('a');
    addButton.setAttribute('href', 'index.html#add');
    addButton.innerText = 'add';

    block.appendChild(addButton);

    return block;
}

function displayBookItem(el, index) {
    let bookid = index;

    let book = document.createElement('li');
    let booktitle = document.createElement('a');
    booktitle.setAttribute('href', 'index.html?id='+ bookid + '#preview');

    booktitle.innerText = el.name;

    let editButton = document.createElement('a');
    editButton.setAttribute('href', 'index.html?id='+ bookid + '#edit');
    editButton.innerText = 'edit';
    editButton.classList.add('editButton');

    editButton.addEventListener('click', () => renderEditForm(index));

    book.appendChild(booktitle);
    book.appendChild(editButton);
    return book;
}

function getListFromStorage(index) {
    let arr = JSON.parse(localStorage.getItem(listName));
    if (index) {
        if (arr[index]) {
            return arr[index];
        } else {
            let result = arr[Object.keys(arr)[0]];
            for (let item in result) {
                result[item] = '';
            }
            return result;
        }
    }

    return arr;
}

function saveItemToStorage(index, value) {
    let data = getListFromStorage();
    data[index] = value;
    let strData = JSON.stringify(data);
    localStorage.setItem(listName, strData);
}

function renderViewForm(index) {
    let item = getListFromStorage(index);
    let form = document.createElement('form');

    for (let field in item) {

        if(field === 'image') {
            let img = document.createElement('img');
            img.setAttribute('src', item[field]);
            form.appendChild(img);
            console.log();
        }

        let input = document.createElement('input');
        input.setAttribute('value', item[field]);
        input.setAttribute('disabled', 'disabled');
        form.appendChild(input);
        form.appendChild(input);

    }

    let dynamicSection = document.getElementsByClassName('dynamicSection')[0];
    dynamicSection.innerHTML = '';
    dynamicSection.appendChild(form);
}

function renderEditForm(index) {
    let item = getListFromStorage(index);
    let form = document.createElement('form');

    for (let field in item) {
        let input = document.createElement('input');
        input.setAttribute('name', field);
        input.setAttribute('placeholder', field);
        input.setAttribute('value', item[field]);
        input.setAttribute('required', 'required');
        form.appendChild(input);
    }

    let saveButton = document.createElement('button');
    saveButton.setAttribute('type', 'submit');
    saveButton.innerHTML = 'save';
    form.appendChild(saveButton);


    let cancelButton = document.createElement('button');
    cancelButton.innerHTML = 'cancel';
    cancelButton.setAttribute('type', 'button')
    form.appendChild(cancelButton);
    cancelButton.addEventListener('click', function () {
        if (confirm('Discard changes?')) {
            goToPage('index.html?id=' + index + '#preview');
        }
    });

    let dynamicSection = document.getElementsByClassName('dynamicSection')[0];
    dynamicSection.innerHTML = '';
    dynamicSection.appendChild(form);

    form.addEventListener('submit', function (e) {
        console.log('sub');
        let itemData = {};
        let inputArr = this.getElementsByTagName('input');

        for (let inputIndex = 0; inputIndex < inputArr.length; inputIndex++) {
            let inputObj = inputArr[inputIndex];
            itemData[inputObj.name] = inputObj.value;
        }
        saveItemToStorage(index, itemData);
        initPage(root);
        goToPage('index.html?id=' + index + '#preview');
        setTimeout(() => alert('Book successfully updated'), 300);

        e.preventDefault();
    })
}

function initPage(root) {
    root.innerHTML = '';
    let main = document.createElement('div');
    main.classList.add('main');

    let listSection = document.createElement('div');
    listSection.classList.add('listSection');
    listSection.appendChild(displayBooklist(getListFromStorage()));
    main.appendChild(listSection);

    let dynamicSection = document.createElement('div');
    dynamicSection.classList.add('dynamicSection');
    main.appendChild(dynamicSection);
    root.appendChild(main);

    let links = root.getElementsByTagName('a');

    for(let i = 0; i < links.length; i++ ) {

       links[i].addEventListener('click', function (e) {
           goToPage(e.target.getAttribute('href'));
           e.preventDefault();

       })
    }
}
function goToPage(url) {
    let state = {page: url};
    history.pushState(state, '', state.page);
    updatestate(state);
}

function updatestate(state) {
    if (!state) {
        return;
    }

    let regex = state.page.match(/\?id=(\d+)#(edit|preview)$/);
    if (regex) {
        let id = regex[1];
        let action = regex[2];

        if (action === 'edit') {
            renderEditForm(id);
        } else {
            renderViewForm(id);
        }
        return;
    }

    if (/index\.html#add$/.test(state.page)) {
        let storage = getListFromStorage();
        let keys = Object.keys(storage);
        let newId = parseInt(keys[keys.length - 1]) + 1;
        renderEditForm(newId);
        return;
    }
}

window.addEventListener('popstate', function (e) {
    updatestate(e.state);
})

initPage(root);
if (location.search) {
    updatestate({page: location.search + location.hash});
}