"use strict";



function pyramid(n) {

    for(i=1 ;i<=n;i++) {

        let str = ' '.repeat(n-i);
        let str2 = '*'.repeat(i*2-1);
    console.log(str + str2 + str);
    }
}

pyramid(5)

