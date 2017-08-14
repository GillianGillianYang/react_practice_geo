const hello = () => {
    console.log('hello');
}
setTimeout(hello, 2000)


const hello2 = (done) => {
    setTimeout(() => {
        done('gina')
    }, 1000)
}

hello2((done) => {
    console.log(done)
})

//--promise -------
const hello22 = (input) => {
    return new Promise(
        function(resolve, reject) {
            setTimeout(
                () => { resolve('Gillian') },
                1000);
        }
    )
}

//then -> ok do fun ; error do fun
hello22(input).then(function(result) { console.log(result) });


//promise async await

//callback 是function  不是執行
/*
const welcome = (saySomething) => {
    setTimeout(
        () => {
            saySomething('Gillian');
        }, 2000
    );
}

//const callback = (saySomething) => { saySomething('Gillian'); };
welcome((username) => { console.log(`Ciao, ${username}`); });
*/