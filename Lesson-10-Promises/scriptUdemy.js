'use strict';

const req = new Promise((resolve, reject)=>{ //resolve & reject
    setTimeout(()=>{
        console.log('Preparing data...');

        const product = {
            name: 'TV',
            price: 2000
        };
    }, 2000)
});

setTimeout(() => {
            product.status = 'order';
            console.log(product)
        }, 2000);