// slowMath.add(6,2).then((num) => {
//     console.log(num);
//     let h3Text = num;
//     let h3 = $('<h3>');
//     let div = $('<div>');
//     h3.append(h3Text);
//     div.append(h3);
//     $('body').append(div);
//     return slowMath.multiply(num, 2);
//     // why is adding a second console.log considered unreachable code
// }).then(num => {
//     console.log(num);
//     let h3Text = num;
//     let h3 = $('<h3>');
//     let div = $('<div>');
//     h3.append(h3Text);
//     div.append(h3);
//     $('body').append(div);
//     return slowMath.divide(num,4);
// }).then(num => {
//     console.log(num);
//     let h3Text = num;
//     let h3 = $('<h3>');
//     let div = $('<div>');
//     h3.append(h3Text);
//     div.append(h3);
//     $('body').append(div);
//     return slowMath.subtract(num, 3);
// }).then(num => {
//     console.log(num);
//     let h3Text = num;
//     let h3 = $('<h3>');
//     let div = $('<div>');
//     h3.append(h3Text);
//     div.append(h3);
//     $('body').append(div);
//     return slowMath.add(num, 98);
//     // when you change the first function to add 1 and 1, this function has a problem with the answer with adding 98 to the "-2" that eventually results before this function.
//     // this error causes the functions following these lines of code to not calculate and it disrupts the entire chain.
// }).then(num => {
//     console.log(num);
//     let h3Text = num;
//     let h3 = $('<h3>');
//     let div = $('<div>');
//     h3.append(h3Text);
//     div.append(h3);
//     $('body').append(div);
//     return slowMath.remainder(num, 2);
// }).then(num => {
//     console.log(num);
//     let h3Text = num;
//     let h3 = $('<h3>');
//     let div = $('<div>');
//     h3.append(h3Text);
//     div.append(h3);
//     $('body').append(div);
//     return slowMath.multiply(num, 50);
// }).then(num => {
//     console.log(num);
//     let h3Text = num;
//     let h3 = $('<h3>');
//     let div = $('<div>');
//     h3.append(h3Text);
//     div.append(h3);
//     $('body').append(div);
//     return slowMath.remainder(num, 40);
// }).then(num => {
//     console.log(num);
//     let h3Text = num;
//     let h3 = $('<h3>');
//     let div = $('<div>');
//     h3.append(h3Text);
//     div.append(h3);
//     $('body').append(div);
//     return slowMath.add(num, 32);
// }).then(num => {
//     console.log(`The final result is ${num}.`)
//     let h3Text = `The final result is ${num}`;
//     let h3 = $('<h3>');
//     let div = $('<div>');
//     h3.append(h3Text);
//     div.append(h3);
//     $('body').append(div);
// }).catch(err => {
//     console.log(err);
// });


// Async/Await Section

async function doMath() {
    try {
        let message = await slowMath.add(6, 2);
        // return slowMath.multiply(message,2);
        // I thought the return function could be used here but using it does not allow you to list what the messages are like you see below. Maybe you would have to block each task in its own try/catch block if you want to use the return function?
        console.log(message);
        let message2 = await slowMath.multiply(message, 2);
        console.log(message2);
        let message3 = await slowMath.divide(message2, 4);
        console.log(message3);
        let message4 = await slowMath.subtract(message3, 3);
        console.log(message4);
        let message5 = await slowMath.add(message4, 98);
        console.log(message5);
        let message6 = await slowMath.remainder(message5, 2);
        console.log(message6);
        let message7 = await slowMath.multiply(message6, 50);
        console.log(message7);
        let message8 = await slowMath.remainder(message7, 40);
        console.log(message8);
        let message9 = await slowMath.add(message8, 32);
        console.log(`The final result is ${message9}.`);

    } catch (err) {
        console.log(err);
    };
};

doMath()
// Don't forget to call the function that holds the async/wait chain otherwise the calculations will not be executed.