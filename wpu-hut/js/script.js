function getAllMenu() {
    //getJSON adalah ajax khusus untuk JSON
    $.getJSON('data/pizza.json', function (data) {
        let menu = data.menu;//untuk masuk kedalam array

        $.each(menu, function (i, data) {
            $('#daftar-menu').append('<div class="col-md-4 mb-3"><div class="card"><img src="img/menu/' + data.gambar + '" class="card-img-top" alt="' + data.nama + '"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title">Rp. ' + data.harga + '</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>');
        });
    });
}

getAllMenu();

$('.nav-link').on('click', function () {
    $('.nav-link').removeClass('active');//hilangkan semua class active
    $(this).addClass('active');//memberikan class active pada class yang di click

    let kategori = $(this).html();//mengambil Html yang sedang di klik
    $('h1').html(kategori);//memberikan isi html ke elemen h1

    if (kategori == "All Menu") {
        getAllMenu();
        return;
    }

    $.getJSON('data/pizza.json', function (data) {
        let menu = data.menu;
        let content = "";

        $.each(menu, function (i, data) {
            if (data.kategori == kategori.toLowerCase()) {
                content += '<div class="col-md-4 mb-3"><div class="card"><img src="img/menu/' + data.gambar + '" class="card-img-top" alt="' + data.nama + '"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title">Rp. ' + data.harga + '</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>';
            }
        });

        $('#daftar-menu').html(content);
    });


});