const get2 = (number, done) => {
    setTimeout(() => { done(number * number) }, 1000);
}
const get5 = (number, done) => {
    setTimeout(() => { done(number * number * number * number * number) }, 1000);
}
const get7 = (number, done) => {
    setTimeout(() => { done(number * number * 0.7) }, 1000);
}
console.log('23ddd42');


const get2p = (number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(number * number) }, 1000);
    });
}

const get5p = (number) => {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => { resolve(number * number * number * number * number) }, 1000);
        }
    );
}

const get7p = (number) => {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => { resolve(number * number * 0.7) }, 1000);
        }
    );
}



let number = 5;

//normal callback
get2(5, (result1) => {
    get5(result1, (result2) => {
        get7(result2, (result3) => {
            console.log(result3)
        })
    })
})

//promise

get2p(5).then(
    (result1) => { return get5p(result1) }
).then(
    (result2) => { return get7p(result2) }
).then(
    (result3) => { console.log(result3); }
)

get2p(5).then(
        (result1) => {
            return get5p(result1)
        })
    .then((result2) => {
        return get7p(result2)
    })
    .then((result3) => {
        console.log(result3)
    })