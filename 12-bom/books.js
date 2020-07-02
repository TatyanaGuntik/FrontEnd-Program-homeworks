let bookList = {
    "1": {
        name: 'Harry Potter and the Chamber of Secrets',
        author: 'Rowling J K',
        plot: 'It’s hard to fall in love with an earnest, appealing young hero like Harry Potter and then to watch helplessly as he steps into terrible danger! And in J. K. Rowling’s Harry Potter and the Chamber of Secrets, the much anticipated sequel to the award-winning Harry Potter and the Sorcerer’s Stone, he is in terrible danger indeed. As if it’s not bad enough that after a long summer with the horrid Dursleys he is thwarted in his attempts to hop the train to the Hogwarts School of Witchcraft and Wizardry to begin his second year. But when his only transportation option is a magical flying car, it is just his luck to crash into a valuable (but clearly vexed) Whomping Willow. Still, all this seems like a day in the park compared to what happens that fall within the haunted halls of Hogwarts.',
        image: 'https://vignette.wikia.nocookie.net/harrypotter/images/6/6d/Chamber_of_Secrets_New_UK_Cover.jpg/revision/latest?cb=20170109045927'
    },
    "2": {
        name: 'Game of Thrones',
        author: 'George R. R. Martin',
        plot: 'The prologue of the novel introduces the Wall: an ancient barrier of stone, ice, and magic, hundreds of feet high and hundreds of miles long, shielding the Seven Kingdoms from the northern wilderness. The Wall is manned by the Night\'s Watch: an order of warriors sworn to serve there for life, defending the realm from the fabled Others, an ancient and hostile inhuman race, as well as from the human "wildlings" who live north of the Wall.',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Game_of_Thrones_Season_6.jpeg/220px-Game_of_Thrones_Season_6.jpeg'
    },
    "3": {
        name: 'The Hunger Games',
        author: 'Suzanne Collins',
        plot: 'The Hunger Games follows 16-year-old Katniss Everdeen, a girl from District 12 who volunteers for the 74th Hunger Games in place of her younger sister Primrose Everdeen. Also selected from District 12 is Peeta Mellark. They are mentored by their district\'s only living victor, Haymitch Abernathy, who won 24 years earlier and has since led a solitary life of alcoholism.',
        image: 'https://i.pinimg.com/originals/81/bc/3e/81bc3eae1412ebcb17510bf854ea99f2.jpg'
    },
}


if (!localStorage.getItem("myBooklist")) {
    localStorage.setItem("myBooklist", JSON.stringify(bookList));
}




