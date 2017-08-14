//async await //node.js 7 以後

const get2p = (number) => {
    return new Promise((resolve, reject) => {
        if (number > 10) { reject(); } else {
            setTimeout(() => { resolve(number * number) }, 1000);
        }

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

//async 中 可以用 await 把promise 解出來
//async 的回傳值會自動用   promise包起來

const run = async(number) => {
    let result = await get2p(number).catch(
        (error) => {
            console.log(error);
        });
    //以上適用在promise 的方式中
    try {
        result = await get5p(result);
    } catch (error) {
        console.log(error);
    }
    //result = await get7p(retult);
    console.log('test:' + result);
}
run(2);


//async 不一定要有await 但是一定會回傳 promise 
//await 一定要用在 async 之中

const run2 = async(number) => {
    let result = await get2p(number).catch(
        (error) => {
            console.log(error);
        });
    return result;
}
console.log(run2(5)); // Promise {<pending>}
//印出的時間比較早出現

/*
const run2 = async function(number) {
    let result = await get2p(number)
    console.log(result);
}
*/

//promise
get2p(5).then(
    (result1) => { return get5p(result1) }
).then(
    (result2) => { return get7p(result2) }
).then(
    (result3) => { console.log(result3); }
)