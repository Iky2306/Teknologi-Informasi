// %20 = spasi
// %0A = enter

var mail_himatif = "untarahimatif@gmail.com";

var nama_pembuat = document.getElementById("nama_pembuat");
var nama_karya = document.getElementById("nama_karya");
var link_karya = document.getElementById("link_karya");
var deskripsi_karya = document.getElementById("deskripsi_karya");


function send(){

    if(nama_pembuat.value == ""){
        return;
    }
    if(nama_karya.value == ""){
        return;
    }
    if(link_karya.value == ""){
        return;
    }
    if(deskripsi_karya.value == ""){
        return;
    }

    window.open("mailto:" + mail_himatif + "?subject=KARYA MAHASISWA IT UNTARA&body=Nama Pembuat: "+ nama_pembuat.value + "%0ANama Karya:" + nama_karya.value + "%0ALink Karya:" + link_karya.value + "%0ADeskripsi Karya:" + deskripsi_karya.value + "%0A%0A%0AMohon masukan gambar ukuran 854x480(horizontal)", "_blank");

}