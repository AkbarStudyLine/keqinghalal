// function Kondisi () {
//     var response = confirm("Ok or Cancel?");
//     if ( response === true ) {
//         alert('Anda menekan tombol OK');
//     } else {
//         alert('Anda Menekan Cancel');
//     }
//     console.log(response);
// }

//var img = document.getElementsByClassName('img');








// functions


function ubahGambar () {
    document.querySelector("#img").style.backgroundImage = "url('img/animek2.jpg')";
}

function sebelumnya () {
    document.querySelector("#img").style.backgroundImage = "url('img/keqing.png')";
}

function setelah () {
    document.querySelector("#img").style.backgroundImage = "url('img/inu.png')";
}


// endFunctions











// DOMS



// membaut element
var str = document.createElement('strong');
// membuat text yang akan kita taruh kedalam element yang sudah kita buat
var tStr = document.createTextNode('<');
// wadah element yang sudah ada dalam html
var pre = document.querySelector('.pre');
// mengabungakan element yang sudah di buat dengan text yang sudah di persiapkan
str.appendChild(tStr);
// menaruh element yang usdah siap di pajang
pre.appendChild(str);

// lanjut ges


var str2 = document.createElement('strong');

var tStr2 = document.createTextNode('>');

var next = document.querySelector('.next');

str2.appendChild(tStr2);

next.appendChild(str2);


// endDOMS
