
const inputTugas = document.getElementById("inputTugas");
const btntambah = document.getElementById("btntambah");
const daftarTugas = document.getElementById("daftarTugas");
const inputTanggal = document.getElementById("inputTanggal");

let daftarTugasArray = [];
let indexTugasYangDiedit = null;

btntambah.addEventListener("click", function() {
    let teksTugas = inputTugas.value;

    if(teksTugas === "") {
        alert("Data harus dimasukkan!");
        return;
    }

    daftarTugasArray.push({
    nama: teksTugas,
    tanggal: inputTanggal.value,
    status: "pending"
    });

    inputTugas.value = "";
    inputTanggal.value = "";
    tampilkanTugas();

    let listbaru = document.createElement("li");
    let spanbaru = document.createElement("span");
    
    spanbaru.innerHTML = teksTugas;
    listbaru.appendChild(spanbaru);
    daftarTugas.appendChild(listbaru);
    const warnabaru = document.querySelectorAll("li");
    warnabaru.forEach((item, index) => {
        if(index % 2 === 0) {
            item.style.color = "red";
        } else {
            item.style.color = "green";
        }
    });

    inputTugas.value = "";
});

function tampilkanTugas() {
    daftarTugas.innerHTML = "";

    daftarTugasArray.forEach(function(tugas, index) {
        let itemTugas = document.createElement("li");
        let spanbaru = document.createElement("span");

        let tanggalTampil = tugas.tanggal ? tugas.tanggal : "Tanpa tanggal";
        spanbaru.innerHTML = `<b>${tugas.nama}</b> — ${tanggalTampil} 
                      <span class="badge badge-${tugas.status}">[${tugas.status}]</span>`;

        let tombolStatus = document.createElement("button");
        tombolStatus.innerText = "Status";

        let tombolEdit = document.createElement("button");
        tombolEdit.innerText = "Edit";
}