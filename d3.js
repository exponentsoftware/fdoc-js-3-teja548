
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
const [
    name,
    [html, css, js, react],
    [htmlScore, cssScore, jsScore, reactScore]
] = student
console.log(
    name,
    html,
    css,
    js,
    react,
    htmlScore,
    cssScore,
    jsScore,
    reactScore
)
console.log(student);


//Write a function called convertArrayToObject which can convert the array to a structured object.
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
];

const convertArrayToObject = (e) =>
    e.map(([name, skills, scores]) => {
        return { name, skills, scores }
    })

console.log(convertArrayToObject(students));


//Copy the student object to newStudent without mutating the original object. In the new object add the following ?

const student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 }
        ],
        dataBase: [{ skill: 'MongoDB', level: 7.5 }],
        dataScience: ['Python', 'R', 'D3.js']
    }
}


const cloud = [
    { skill: 'AWS', level: 7 },
    { skill: 'Jenkin', level: 7 },
    { skill: 'Git', level: 8 }
]
const copiedStudent = {
    ...student,
    skills: {
        ...student.skills,
        frontEnd: [...student.skills.frontEnd, { skill: 'Bootstrap', level: 8 }],
        backEnd: [...student.skills.backEnd, { skill: 'Express', level: 8 }],
        dataBase: [...student.skills.dataBase, { skill: 'SQL', level: 8 }],
        dataScience: [...student.skills.dataScience, 'SQL'],
        cloud: [...cloud]
    }
}
console.log(copiedStudent)


// Use the student object to solve the following questions:

//a
const lengthOfKeys = Object.keys(student).length
console.log(lengthOfKeys)

//b
const lengthOfValues = Object.values(student).length
console.log(lengthOfValues)

//c
const lengthOfSkills = Object.keys(student.skills).length
console.log(lengthOfSkills)

//d
const keys = Object.keys(student)
keys == 'graphicDesign' ? (
    console.log('student has the graphic design property')
) : (
    console.log('student doesnt have the graphic design property')
)

// e
const allKeys = Object.keys(student)
console.log(allKeys)


//
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '17/05/2019 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '17/05/2019 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '17/05/2019 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '17/05/2019 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '17/05/2019 10:00 AM',
        isLoggedIn: false
    }
];

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
];

const randomId = () => {
    const numbersLetters = '0123456789abcdefghijklmnopqrstuvwzyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(
        ''
    );
    let randId = '';
    let randIndex;
    for (let i = 0; i < 6; i++) {
        randIndex = Math.floor(Math.random() * numbersLetters.length);
        randId += numbersLetters[randIndex];
    }
    return randId;
};
const newUser = {
    _id: randomId(),
    username: 'tedEx',
    email: 'tedEx@gmail.com',
    password: '1231231232',
    createdAt: new Date(),
    isLoggedIn: false
};
const signUp = () => {
    const { email } = newUser;
    for (const user of users) {
        if (user['email'] == email) {
            return 'An email has already exist. Please log in!';
        }
    }
    users.push(newUser);
    return 'You have successfully signed up!';
};
console.log(users);
console.log(signUp(newUser));

const currentUser = {
    email: 'tedEx@gmail.com',
    password: '1231231232'
};
const signIn = user => {
    let found = false;
    const { email, password } = user;
    for (let i = 0; i < users.length; i++) {
        if (users[i]['email'] === email && users[i]['password'] === password) {
            users[i].isLoggedIn = true;
            return 'Successfully logged in';
        }
    }
    if (!found) {
        return 'Use does not exist';
    }
};
console.log(signIn(currentUser));
console.log(users);
console.log(signIn({ email: 'asab@asab.com', password: '123456' }));

//create function rateProduct , which will give rating to the product
const rateProduct = (productId, userId, ratingPoint) => {
    let found = false;
    for (let i = 0; i < products.length; i++) {
        if (products[i]._id === productId) {
            for (let j = 0; j < products[i].ratings.length; j++) {
                if (products[i].ratings[j].userId === userId) {
                    const rate = { userId, rate: ratingPoint };
                    products[i].ratings[j].rate = ratingPoint;
                    found = true;
                    break;
                }
            }
            if (!found) {
                products[i].ratings.push({ userId, rate: ratingPoint });
            }
        }
    }
};
console.log(products);
rateProduct('eedfcf', 'fg12cy', 5);
rateProduct('aegfal', 'fg12cy', 2.5);
rateProduct('aegfal', 'fg12cy', 2.0);
console.log(products);

