const data = [
    {
        'folder': true,
        'title': 'Pictures',
        'children': [
            {
                'title': 'logo.png'
            },
            {
                'folder': true,
                'title': 'Vacations',
                'children': [
                    {
                        'title': 'spain.jpeg'
                    }
                ]
            }
        ]
    },
    {
        'folder': true,
        'title': 'Desktop',
        'children': [
            {
                'folder': true,
                'title': 'screenshots',
                'children': null
            }
        ]
    },
    {
        'folder': true,
        'title': 'Downloads',
        'children': [
            {
                'folder': true,
                'title': 'JS',
                'children': null
            },
            {
                'title': 'nvm-setup.exe'
            },
            {
                'title': 'node.exe'
            }
        ]
    },
    {
        'title': 'credentials.txt'
    }
];

const rootNode = document.getElementById('root');

function displayStructure(data) {
    let block = document.createElement('div');

    data.forEach(el => {
        let result = document.createElement('div');

        result.appendChild(createTitle(el.title));

        if (el.folder && el.children) {
            result.classList.add('folder');
            let newBlock = displayStructure(el.children);
            makeVisibleOnclick(newBlock);
            result.appendChild(newBlock);
        } else if (el.folder && !el.children) {
            result.classList.add('folder');
            let empty = document.createElement('div');
            empty.innerText = 'Folder is empty';
            result.appendChild(empty);
        } else {
            result.classList.add('file');
        }
        block.appendChild(result);
    })
    return block;
}

function createTitle(titleText) {
    let result = document.createElement('span');
    result.innerText = titleText;
    return result;
}

function makeVisibleOnclick(item) {
    item.addEventListener('click', function (e) {
        e.target.closest('div').classList.toggle('visible');
    });
}

let result = displayStructure(data);
rootNode.appendChild(result);

let elements = document.getElementsByClassName('folder');
for (let i = 0; i < elements.length; i++) {
    makeVisibleOnclick(elements[i]);
}

function hideContextMenu() {
    let activeMenu = document.getElementsByClassName('contextmenu');
    if (activeMenu.length) {
        activeMenu[0].remove();
    }
}

let allBlocks = rootNode.getElementsByTagName('span');

for (let i = 0; i < allBlocks.length; i++) {
    allBlocks[i].addEventListener('contextmenu', function (e) {
        let menuItem = this.parentNode;
        let title = this;

        hideContextMenu();
        let menu = document.createElement('div');
        menu.classList.add('contextmenu');

        let edit = document.createElement('div');
        edit.classList.add('edit');
        edit.innerText = 'Rename';

        edit.addEventListener('click', function () {
            title.setAttribute('contenteditable', true);
            title.focus();
            title.addEventListener('keyup', function (event) {
                if (event.keyCode === 13) {
                    title.removeAttribute('contenteditable');
                    event.stopPropagation();
                }
            });
            hideContextMenu();
        });

        let deleteBlock = document.createElement('div');
        deleteBlock.classList.add('delete');
        deleteBlock.innerText = 'Delete item';

        deleteBlock.addEventListener('click', function () {

            if (menuItem.closest('div:not([class])').childNodes.length === 1) {
                createEmptyTitle(menuItem);
            }
            menuItem.remove();
        });

        menu.appendChild(edit);
        menu.appendChild(deleteBlock);
        this.appendChild(menu);

        e.preventDefault();
    }, true);
}
document.addEventListener('click', function (e) {
    let activeMenu = document.getElementsByClassName('contextmenu');
    if (activeMenu.length && !e.target.closest('.contextmenu')) {
        activeMenu[0].remove();
    }
});

function createEmptyTitle(item) {
    let empty = document.createElement('div');
    empty.classList.add('mrgn-l-30')
    empty.innerText = 'Folder is empty';
    item.parentNode.appendChild(empty);
}


