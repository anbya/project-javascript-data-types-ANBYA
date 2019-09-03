function setLocalStorage() {
    let nama = document.getElementById("nama").value;
    let umur = document.getElementById("umur").value;
    if (nama == "" || umur == ""){
        alert(`data tidak boleh kosong`);
    }
    else{
        localStorage.setItem("nama", nama);
        localStorage.setItem("umur", umur);
        alert("berhasil mengeset data");
        document.getElementById("nama").value="";
        document.getElementById("umur").value="";
    }
};
function tampilLocalStorage() {
    let tampilNama = localStorage.getItem("nama");
    let tampilUmur = localStorage.getItem("umur");
    if (tampilNama == null || tampilUmur == null){
        alert(`local storage belum di set`);
    }
    else{
        alert(`nama saya ${tampilNama} dan umur saya ${tampilUmur}`);
    }
};
function clearLocalStorage() {
    let prmNama = localStorage.getItem("nama");
    let prmUmur = localStorage.getItem("umur");
    if (prmNama == null || prmUmur == null){
        alert(`local storage belum di set`);
    }
    else{
        localStorage.clear();
        alert(`berhasil menghapus data di local storage`);
    }
};