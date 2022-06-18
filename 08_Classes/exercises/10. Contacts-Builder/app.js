class Contact {

    constructor(firstName, lastName, phone, email) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._phone = phone;
        this._email = email;
        this._online = false;
    }


    get online() {
        return this._online;
    }

    set online(value) {
        this._online = value;

        if(this.titleDiv){
            this.titleDiv.className = this._online ? 'title online' : 'title';
        }
    }

    render(id){
        this.article = document.createElement('article');
        this.titleDiv = document.createElement('div');
        this.buttonI = document.createElement('button');
        this.infoDiv = document.createElement('div');
        this.phoneSpan = document.createElement('span');
        this.emailSpan = document.createElement('span');

        this.titleDiv.className = this._online ? 'title online' : 'title';
        this.titleDiv.textContent =  this._firstName + ' ' + this._lastName;
        this.buttonI.innerHTML = '&#8505';
        this.titleDiv.appendChild(this.buttonI);
        this.article.appendChild(this.titleDiv);
        this.phoneSpan.innerHTML = '&phone: ' + this._phone;
        this.emailSpan.innerHTML = '&#9993; ' + this._email;
        this.infoDiv.className = 'info';
        this.infoDiv.style.display = 'none';
        this.infoDiv.appendChild(this.phoneSpan);
        this.infoDiv.appendChild(this.emailSpan);
        this.article.appendChild(this.infoDiv);

        document.getElementById(id).appendChild(this.article);

        this.buttonI.addEventListener('click', (e) => {
            this.infoDiv.style.display === 'none' ? this.infoDiv.style.display = 'block' : this.infoDiv.style.display = 'none';
        })
    }
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];

contacts.forEach(c => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000)