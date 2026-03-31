//alert("belajar javascript");

function kirim() {
    //ambil value dari input id= nama 
    let nama = document.getElementById('nama').value;
    console.log("nama : " + nama);
    let saran = document.getElementByIdI('saran').value;

    //tampilkan nama ke ul id=list-pesan
    //document.getElementById('list-pesan').innerHTML = nama;
    //document.getElementById('list-pesan').innerHTML += `<li>${nama}</li>`;

    document.getElementById('list-pesan').innerHTML +=`<tr><td>${nama}</td><td>${saran}</td></tr>`;
}