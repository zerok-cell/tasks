
const maxNum = (obj:object) =>{
    return Math.max(...Object.keys(obj).map(Number));
}

export default maxNum;