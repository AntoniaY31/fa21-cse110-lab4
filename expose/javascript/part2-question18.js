let d = new Date();
let time = setInterval(callBack, 1000, a = d.toLocaleDateString());
function callBack(a){
    console.log(a);
}