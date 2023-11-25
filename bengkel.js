// %20 = spasi
// %0A = enter

var mail_himatif = "untarahimatif@gmail.com";

var name_person = document.getElementById("name_person");
var laptop_person = document.getElementById("laptop_person");
var keluhan_person = document.getElementById("keluhan_person");


function send(){

    if(name_person.value == ""){
        return;
    }
    if(laptop_person.value == ""){
        return;
    }
    if(keluhan_person.value == ""){
        return;
    }

    window.open("mailto:" + mail_himatif + "?subject=BENGKEL IT&body=Nama Saya: "+ name_person.value + "%0AMerk Laptop:" + laptop_person.value + "%0AKeluhan:" + keluhan_person.value, "_blank");

}