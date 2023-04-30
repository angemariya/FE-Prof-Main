function outer() {
    let a = 1;
    const b = "asfdasf";
    const c = [];

    function withContext() {
        console.log(a,b,c)
    }

    function changeClosure(someNumber) {
        a = someNumber;
        c.push(someNumber)
    }

    return [ withContext, changeClosure ];
}

const [accesToOurFn, changeClosure] = outer();
const [accesToOurFn2, changeClosure2] = outer();


const замыкание = {
    a,
    b,
    c
}
accesToOurFn();
changeClosure(3);

const замыкание2 = {
    a,
    b,
    c
}
accesToOurFn2();
