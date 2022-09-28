const isString = (testArg, callbackFunc) => {
    if(typeof testArg === "string") callbackFunc(testArg)
}

isString("simple string", (str) => {console.log(str)})

const firstWordUpperCase = (str, callbackFunc) => {
    let seperatedArr = str.split(" ")
    seperatedArr[0] = seperatedArr[0].toUpperCase()
    callbackFunc(seperatedArr.join(" "))
}

firstWordUpperCase("this is a simple string", (str) => {console.log(str)})

const generateWelcomeMsg = (nameToGreet, callbackFunc) => callbackFunc(`Welcome, ${nameToGreet}`)

generateWelcomeMsg("Nethanel", (welcomeMsg) => {console.log(welcomeMsg)})

