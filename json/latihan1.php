<?php
// $mahasiswa = [
//     [
//         "nama" => "andi saputra",
//         "nim" => "2015140368",
//         "email" => "sapoetrandi10@gmail.com"
//     ],
//     [
//         "nama" => "andi saputra",
//         "nim" => "2015140368",
//         "email" => "sapoetrandi10@gmail.com"
//     ]
// ];
//koneksi ke database
$dbh = new PDO('mysql:host=localhost;dbname=phpmvc', 'root', '');
//menyiapkan dan memasukan query db yang diinginkan
$db =  $dbh->prepare('SELECT * FROM mahasiswa');
//eksekusi sebelum ditampilkan
$db->execute();
//mengambil data sebagai array asosiatif
$mahasiswa = $db->fetchAll(PDO::FETCH_ASSOC);
//meng-encode data dari database menjadi JSON
$data = json_encode($mahasiswa);
echo $data;


//mengakses JSON menggunakan PHP
