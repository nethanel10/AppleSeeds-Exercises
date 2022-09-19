const Boom = (n) => {
    for(let i = 0; i<=n; i++) {
        if(hasSeven(i) && !(i%7 === 0) || !hasSeven(i) && (i%7 === 0)) console.log("Boom")
        else if(hasSeven(i) && (i%7 === 0)) console.log("Boom-Boom")
        else console.log(i)
    }
}

const hasSeven = (num) => {
    if(num.toString().includes("7")) return true
    return false
}

Boom(30)