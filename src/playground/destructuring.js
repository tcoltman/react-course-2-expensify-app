//Object Destructring

const person = {
    name: 'Trevor',
    age: 43,
    location: {
        city: 'Johannesburg',
        temp: 92
    }
};

// const name = person.name;
// const age = person.age;

const {name:firstname='Anonymous',age} = person;

console.log(`${firstname} is ${person.age}`)


const {city,temp:temper} = person.location;
if (city && temper ){
console.log(`Its ${temper} in ${city}`)
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher : {
        sname: 'Penguin'
    }
};

const {name:publisherName='Self-Published'} = book.publisher;

console.log(publisherName);


//Array Destructring

const address = ['1299 Ruacana Ave', 'Waterfall Country Estate' , 'Midrand', 'Johannesburg','2157'];

const [, , suburb='New York', city2] = address; //blank skips

console.log(`You are in ${suburb} ${city2}`);

const item = ['coffee','$2', '$2.50', '$2.75'];

const [i,,mediumPrice] = item;

console.log(`A ${i} costs ${mediumPrice}`)