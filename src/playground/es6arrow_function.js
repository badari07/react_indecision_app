// const getFirstName = (name) => console.log(name.split(' ')[1])

// getFirstName('badari narayan')

// const user = {
//     name: 'badari',
//     cities: ['banagalore', 'mysore', 'hassan'],
//     printPlace: function () {
//         console.log(this.name);
//         console.log(this.cities);


//         this.cities.forEach(cur => {
//             console.log(`${cur} + ${this.name}`)
//         })
//     }
// };

// user.printPlace()

const multiPlayer = {
    number: [2, 4, 6],
    multiBY: 2,
    multiply() {
        return this.number.map(cur => this.multiBY * cur)
    }
};
console.log(multiPlayer.multiply())