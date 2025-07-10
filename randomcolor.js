function GetRandomColor(){
    let val1= Math.floor(Math.random() * 255);
    let val2 = Math.floor(Math.random() * 255);
    let val3 = Math.floor(Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`;
}
let ele= document.getElementsByClassName("box");
for (let i = 0; i < ele.length; i++){
    ele[i].style.backgroundColor = GetRandomColor();
    ele[i].style.color = GetRandomColor();
}
