<?
//ambil data json dari file
$data = file_get_contents('coba.json');
//men-decode json menjadi array
$mahasiswa = json_decode($data, true);//jika true jadi assoc jika tidak ditambahkan menjadi objek

var_dump($mahasiswa);
//cara akses/ambiil nilai ke json -> echo $mahasiswa[1]['hobby'][0];


//mengakses JSON menggunakan PHP