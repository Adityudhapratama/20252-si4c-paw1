//simpan ke local storage
localStorage.setItem("npm", 123);
localStorage.setItem("nama", "yudha");

//baca data local storage
console.log(localStorage.getItem("npm"))

//tampilkan di paragraf id=npm 
document.getElementById("npm").innerHTML = localStorage.getItem("npm")
localStorage.getItem("npm")