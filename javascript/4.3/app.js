
const Jhon = ["Jhon", 89, 120, 103]

const Mike = ["Mike", 116, 94, 123]

const Mary = ["Mary", 94, 134, 105]

const getAvg = (arr) => (arr[1] + arr[2] + arr[3]) / 3

const getWinner = (...players) => {
    
    let avgScores = []

    players.map(p => {
        const avg = getAvg(p)
        console.log(`${p[0]} avg score: ${avg}`)
        avgScores.push(avg)
    })

    let count = 0
    avgScores.map((v) => (v === Math.max(...avgScores) && count++));
    if(count > 1) {
        console.log(`there is a draw, with score of ${Math.max(...avgScores)} between:`)
        avgScores.forEach((v, i) => (v === Math.max(...avgScores) && console.log(players[i][0])));
    }
    else {
        console.log(`The winner is ${players[avgScores.findIndex(el => Math.max(...avgScores) === el)][0]} with ${Math.floor(Math.max(...avgScores))} points.`)
    }
}

getWinner(Jhon, Mike, Mary)