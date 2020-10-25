const elem = document.getElementsByClassName('cinema-seat');
let money = document.getElementById('money');
let seat = document.getElementById('seat');
for (let i = 0; i < elem.length; i++){
    elem[i].onclick = function () {
        if (elem[i].className == 'cinema-seat cinema-seat-selected'){
            elem[i].setAttribute('class','cinema-seat');
        }else {
            elem[i].setAttribute('class','cinema-seat cinema-seat-selected');
        }
        let num = document.getElementsByClassName('cinema-seat cinema-seat-selected').length;
        console.log(num);
        seat.innerHTML = num;
    }
}
