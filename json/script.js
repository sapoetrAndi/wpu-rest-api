// let mahasiswa = {
//     nama: 'andi saputra',
//     nim: '2015140368',
//     email: 'sapoetrandi10@gmail.com'
// }

// //mengubah objek menjadi json
// console.log(JSON.stringify(mahasiswa));

// let xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         //parsing dari json ke objek
//         let mahasiswa = JSON.parse(this.responseText);
//         console.log(mahasiswa);
//     }
// }
// xhr.open('GET', 'coba.json', true);
// xhr.send();


//menggunakan json
$.getJSON('coba.json', function (data) {
    console.log(data);
});