
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
    // const warnabaru = document.querySelectorAll("li");
    // warnabaru.forEach((item, index) => {
    //     if(index % 2 === 0) {
    //         item.style.color = "red";
    //     } else {
    //         item.style.color = "green";
    //     }
    // });

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

        let tombolHapus = document.createElement("button");
        tombolHapus.innerText = "Hapus";
        tombolHapus.className = "hapus";
        tombolHapus.onclick = function() { hapusTugas(index); };

        itemTugas.appendChild(spanbaru);
        itemTugas.appendChild(tombolStatus);
        itemTugas.appendChild(tombolEdit);
        itemTugas.appendChild(tombolHapus);
        daftarTugas.appendChild(itemTugas);

        if (index % 2 === 0) {
        itemTugas.style.color = "red";
        } else {
        itemTugas.style.color = "green";
        }

    });
}

function gantiStatus(index) {
    let siklusStatus = {
        pending: "progress",
        progress: "done",
        done: "pending"
    };
    daftarTugasArray[index].status = siklusStatus[daftarTugasArray[index].status];
    tampilkanTugas();
}

function hapusTugas(index) {
    let konfirmasi = confirm("Yakin ingin menghapus tugas ini?");
    if (konfirmasi) {
        daftarTugasArray.splice(index, 1);
        tampilkanTugas();
    }
}