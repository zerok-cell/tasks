const joke =  {

    0: "Why did the chicken cross the road?",

        1: "To get to the other side!",
    12312: "To get to the other side!",

        2: "Knock knock.",

}

const w = Object.keys(joke).map(Number)
const x = Math.max(...w)
console.log(x)

